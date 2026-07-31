import { useEffect, useState } from 'react';
import './App.css';

const languageOptions = ['JavaScript', 'Python', 'Java', 'C#', 'Go', 'PHP'];

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    age: '',
    birthDate: '',
    experience: 5,
    termsAccepted: false,
    languages: [],
    modality: 'presencial',
    country: 'España',
    comments: '',
    photo: null,
    favoriteColor: '#2563eb',
  });
  const [photoPreview, setPhotoPreview] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  useEffect(() => {
    if (!photoPreview) return;
    return () => URL.revokeObjectURL(photoPreview);
  }, [photoPreview]);

  const emailIsValid = /\S+@\S+\.\S+/.test(formData.email);
  const ageIsValid = Number(formData.age) > 0;
  const canSubmit = formData.termsAccepted && emailIsValid && ageIsValid;

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === 'checkbox' && name === 'languages') {
      const selected = formData.languages.includes(value)
        ? formData.languages.filter((item) => item !== value)
        : [...formData.languages, value];

      setFormData((prev) => ({ ...prev, languages: selected }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setFormData((prev) => ({ ...prev, photo: file.name }));
    setPhotoPreview(URL.createObjectURL(file));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!canSubmit) return;
    setSubmittedData({ ...formData, photo: formData.photo || 'Sin foto' });
  };

  return (
    <div className="page">
      <div className="card">
        <h1>Registro de estudiante</h1>
        <p>Completa el formulario con tus datos y revisa el resumen al enviar.</p>

        <form onSubmit={handleSubmit}>
          <label>
            Nombre
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>

          <label>
            Correo electrónico
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          {!emailIsValid && formData.email && <p className="error">El correo no tiene un formato válido.</p>}

          <label>
            Contraseña
            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          </label>

          <label>
            Edad
            <input type="number" name="age" value={formData.age} onChange={handleChange} min="1" required />
          </label>
          {formData.age && !ageIsValid && <p className="error">La edad debe ser mayor a 0.</p>}

          <label>
            Fecha de nacimiento
            <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} />
          </label>

          <label className="rangeField">
            <span>Nivel de experiencia: {formData.experience}</span>
            <input type="range" name="experience" min="1" max="10" value={formData.experience} onChange={handleChange} />
          </label>

          <fieldset>
            <legend>Aceptar términos</legend>
            <label className="inline">
              <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} />
              Acepto los términos y condiciones
            </label>
          </fieldset>

          <fieldset>
            <legend>Lenguajes que conoce</legend>
            {languageOptions.map((language) => (
              <label key={language} className="inline">
                <input
                  type="checkbox"
                  name="languages"
                  value={language}
                  checked={formData.languages.includes(language)}
                  onChange={handleChange}
                />
                {language}
              </label>
            ))}
          </fieldset>

          <fieldset>
            <legend>Modalidad</legend>
            <label className="inline">
              <input type="radio" name="modality" value="presencial" checked={formData.modality === 'presencial'} onChange={handleChange} />
              Presencial
            </label>
            <label className="inline">
              <input type="radio" name="modality" value="virtual" checked={formData.modality === 'virtual'} onChange={handleChange} />
              Virtual
            </label>
          </fieldset>

          <label>
            País
            <select name="country" value={formData.country} onChange={handleChange}>
              <option value="España">España</option>
              <option value="México">México</option>
              <option value="Argentina">Argentina</option>
              <option value="Colombia">Colombia</option>
              <option value="Chile">Chile</option>
            </select>
          </label>

          <label>
            Comentarios
            <textarea name="comments" value={formData.comments} onChange={handleChange} rows="4" />
          </label>

          <label>
            Foto de perfil
            <input type="file" name="photo" accept="image/*" onChange={handleFileChange} />
          </label>

          <label>
            Color favorito
            <input type="color" name="favoriteColor" value={formData.favoriteColor} onChange={handleChange} />
          </label>

          <button type="submit" disabled={!canSubmit}>
            Enviar
          </button>
          {!canSubmit && <p className="helper">Marca los términos y completa los datos válidos para habilitar el envío.</p>}
        </form>
      </div>

      {submittedData && (
        <div className="summary">
          <h2>Resumen del registro</h2>
          <ul>
            <li><strong>Nombre:</strong> {submittedData.name}</li>
            <li><strong>Correo:</strong> {submittedData.email}</li>
            <li><strong>Edad:</strong> {submittedData.age}</li>
            <li><strong>Fecha de nacimiento:</strong> {submittedData.birthDate}</li>
            <li><strong>Experiencia:</strong> {submittedData.experience}</li>
            <li><strong>Modalidad:</strong> {submittedData.modality}</li>
            <li><strong>País:</strong> {submittedData.country}</li>
            <li><strong>Lenguajes:</strong> {submittedData.languages.join(', ') || 'Ninguno'}</li>
            <li><strong>Comentarios:</strong> {submittedData.comments || 'Sin comentarios'}</li>
            <li><strong>Foto:</strong> {submittedData.photo}</li>
            <li><strong>Color favorito:</strong> <span className="colorBox" style={{ backgroundColor: submittedData.favoriteColor }} /></li>
          </ul>
          {photoPreview && <img src={photoPreview} alt="Vista previa" className="preview" />}
        </div>
      )}
    </div>
  );
}

export default App;
