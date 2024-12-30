import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const SliderManager = () => {
  const [sliders, setSliders] = useState([]);
  const [uploading, setUploading] = useState(false);

  const handleImageUpload = async (file) => {
    const formData = new FormData();
    formData.append('image', file);
    
    try {
      setUploading(true);
      const response = await fetch('/api/upload-slider-image', {
        method: 'POST',
        body: formData
      });
      const data = await response.json();
      // Yeni slider'ı listeye ekle
      setSliders([...sliders, data]);
    } catch (error) {
      console.error('Yükleme hatası:', error);
    } finally {
      setUploading(false);
    }
  };

  const handleDragEnd = async (result) => {
    if (!result.destination) return;
    
    const items = Array.from(sliders);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    
    setSliders(items);
    
    // Yeni sıralamayı backend'e kaydet
    try {
      await fetch('/api/update-slider-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ items })
      });
    } catch (error) {
      console.error('Sıralama güncellenirken hata:', error);
    }
  };

  return (
    <div className="slider-manager">
      <h2>Slider Yönetimi</h2>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => handleImageUpload(e.target.files[0])}
      />
      
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="sliders">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {sliders.map((slider, index) => (
                <Draggable key={slider.id} draggableId={slider.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <img src={slider.imageUrl} alt={slider.title} />
                      <input
                        type="text"
                        value={slider.title}
                        onChange={(e) => handleTitleChange(slider.id, e.target.value)}
                      />
                      <button onClick={() => handleDelete(slider.id)}>Sil</button>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default SliderManager; 