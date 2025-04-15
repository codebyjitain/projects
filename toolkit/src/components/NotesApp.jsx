import { useState, useEffect } from 'react';
import { Trash2, Copy, Plus, Save } from 'lucide-react';
import Navbar from './Navbar';

export default function NotesApp() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });
  const [currentNote, setCurrentNote] = useState({ id: '', title: '', content: '', isEditing: false });
  const [notification, setNotification] = useState({ show: false, message: '' });

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const showNotification = (message) => {
    setNotification({ show: true, message });
    setTimeout(() => setNotification({ show: false, message: '' }), 2000);
  };

  const createNewNote = () => {
    const newNote = {
      id: Date.now().toString(),
      title: 'Untitled Note',
      content: '',
      isEditing: true
    };
    setNotes([...notes, newNote]);
    setCurrentNote(newNote);
  };

  const selectNote = (note) => {
    setCurrentNote({ ...note, isEditing: false });
  };

  const editNote = () => {
    setCurrentNote({ ...currentNote, isEditing: true });
  };

  const updateNoteContent = (e) => {
    setCurrentNote({ ...currentNote, content: e.target.value });
  };

  const updateNoteTitle = (e) => {
    setCurrentNote({ ...currentNote, title: e.target.value });
  };

  const saveNote = () => {
    const updatedNotes = notes.map(note =>
      note.id === currentNote.id ? { ...currentNote, isEditing: false } : note
    );
    setNotes(updatedNotes);
    setCurrentNote({ ...currentNote, isEditing: false });
    showNotification('Note saved!');
  };

  const deleteNote = (id) => {
    const filteredNotes = notes.filter(note => note.id !== id);
    setNotes(filteredNotes);
    if (currentNote.id === id) {
      setCurrentNote({ id: '', title: '', content: '', isEditing: false });
    }
    showNotification('Note deleted!');
  };

  const copyNoteContent = (content) => {
    navigator.clipboard.writeText(content)
      .then(() => showNotification('Content copied to clipboard!'))
      .catch(() => showNotification('Failed to copy content!'));
  };

  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-md p-4 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-xl font-bold">My Notes</h1>
            <button
              onClick={createNewNote}
              className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
            >
              <Plus size={16} />
            </button>
          </div>

          <div className="overflow-y-auto flex-grow">
            {notes.length === 0 ? (
              <p className="text-gray-500 text-center mt-8">No notes yet. Create one!</p>
            ) : (
              notes.map(note => (
                <div
                  key={note.id}
                  className={`p-3 mb-2 rounded cursor-pointer flex justify-between items-center ${currentNote.id === note.id ? 'bg-blue-100' : 'hover:bg-gray-100'
                    }`}
                  onClick={() => selectNote(note)}
                >
                  <div className="truncate flex-grow">
                    <p className="font-medium">{note.title}</p>
                    <p className="text-sm text-gray-500 truncate">{note.content.substring(0, 30)}</p>
                  </div>
                  <button
                    className="text-red-500 hover:text-red-700 ml-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteNote(note.id);
                    }}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-grow p-6">
          {currentNote.id ? (
            <div className="bg-white rounded-lg shadow-md h-full flex flex-col">
              <div className="p-4 border-b flex justify-between items-center">
                {currentNote.isEditing ? (
                  <input
                    type="text"
                    value={currentNote.title}
                    onChange={updateNoteTitle}
                    className="font-bold text-xl w-full focus:outline-none"
                  />
                ) : (
                  <h2 className="font-bold text-xl">{currentNote.title}</h2>
                )}
                <div className="flex space-x-2">
                  {currentNote.isEditing ? (
                    <button
                      onClick={saveNote}
                      className="p-2 bg-green-500 text-white rounded hover:bg-green-600 flex items-center"
                    >
                      <Save size={16} className="mr-1" />
                      Save
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={() => copyNoteContent(currentNote.content)}
                        className="p-2 bg-gray-200 rounded hover:bg-gray-300 flex items-center"
                      >
                        <Copy size={16} className="mr-1" />
                        Copy
                      </button>
                      <button
                        onClick={editNote}
                        className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                      >
                        Edit
                      </button>
                    </>
                  )}
                </div>
              </div>
              <div className="p-4 flex-grow">
                {currentNote.isEditing ? (
                  <textarea
                    value={currentNote.content}
                    onChange={updateNoteContent}
                    className="w-full h-full p-2 focus:outline-none resize-none"
                    placeholder="Write your note here..."
                  />
                ) : (
                  <div className="whitespace-pre-wrap">{currentNote.content}</div>
                )}
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <p className="text-gray-500 mb-4">Select a note or create a new one</p>
                <button
                  onClick={createNewNote}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center mx-auto"
                >
                  <Plus size={16} className="mr-2" />
                  New Note
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Notification */}
        {notification.show && (
          <div className="fixed bottom-4 right-4 bg-gray-800 text-white py-2 px-4 rounded shadow-lg">
            {notification.message}
          </div>
        )}
      </div>
    </div>
  );
}