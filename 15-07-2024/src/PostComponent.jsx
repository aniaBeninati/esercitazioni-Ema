import React, { useState, useEffect } from 'react';

/**
 * Hook personalizzato per recuperare un post dall'API
 * @param {number} postId - ID del post da recuperare
 * @returns {Object} - Oggetto contenente il post, lo stato di caricamento e l'eventuale errore
 */
const useFetchPost = (postId) => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

   // Effetto per recuperare i dati del post dall'API
  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        if (!response.ok) {
          throw new Error('Errore nel recupero dei dati');
        }
        const data = await response.json();
        setPost(data);
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };

    fetchPost();
  }, [postId]);// Effetto eseguito ogni volta che cambia postId

  return { post, loading, error };
};

/**
 * Componente di caricamento
 * @returns {JSX.Element} - Ritorna un'animazione di caricamento
 */
const Loading = () => (
  <div className="flex items-center justify-center h-full">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
  </div>
);
/**
 * Componente di errore
 * @param {Object} props - Proprietà del componente
 * @param {string} props.message - Messaggio di errore da visualizzare
 * @returns {JSX.Element} - Ritorna un messaggio di errore
 */
const Error = ({ message }) => (
  <div className="text-center text-red-500">
    <p className="text-lg font-semibold">Errore:</p>
    <p>{message}</p>
  </div>
);
/**
 * Componente di dettagli del post
 * @param {Object} props - Proprietà del componente
 * @param {Object} props.post - Oggetto del post contenente title e body
 * @returns {JSX.Element} - Ritorna i dettagli del post
 */
const PostDetails = ({ post }) => (
  <div className="p-6 max-w-xl mx-auto bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
    <h1 className="text-3xl font-bold mb-4 text-blue-600">{post.title}</h1>
    <p className="text-gray-800">{post.body}</p>
  </div>
);
/**
 * Componente principale per mostrare un singolo post
 * @param {Object} props - Proprietà del componente
 * @param {number} props.postId - ID del post da visualizzare
 * @returns {JSX.Element} - Ritorna il componente di visualizzazione del post
 */
const PostComponent = ({ postId }) => {
  const { post, loading, error } = useFetchPost(postId);
 // Condizioni di rendering basate sullo stato di caricamento, errore o dati del post
  if (loading) return <Loading />;
  if (error) return <Error message={error} />;
  if (post) return <PostDetails post={post} />;
  return null;
};

export default PostComponent;
