// CommentBox.js
import React, { useState } from 'react';
import Comment from '../Moleculas/comentario';
import '../css/stylescomentarios.css';

function CommentBox() {
  const [comments] = useState([
    "Algunos productos no coinciden con las imágenes y descripciones en la página. Decepcionante.",
    "Los productos de alta calidad y la variedad son impresionantes. Siempre encuentro algo nuevo que me encanta.",
    "Los precios son muy competitivos, ¡definitivamente ahorro dinero comprando aquí!",
    "Productos de alta calidad ",
  ]);

  return (
    <div className="comment-box">
      <h2>Comentarios</h2>
      <div className="comment-list">
        {comments.map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))}
      </div>
    </div>
  );
}

export default CommentBox;
