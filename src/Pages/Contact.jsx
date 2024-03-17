import React, { useState } from "react";
function Contact() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    sujet: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique pour envoyer les données du formulaire
    console.log(formData);
  };

  return (
    <>
      <section id="contact" className="bg-dark text-white py-5">
        <div className="container">
          <h2 className="subTitle">Contactez-nous</h2>
          <div className="row">
            <div className="col-md-6">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum in repudiandae et amet, sunt illum, minima quae quia
                officiis quod earum quis molestias reprehenderit excepturi
                adipisci vel odit iusto a?
              </p>
              <address>
                <i className="fa fa-map-marker-alt me-3"></i>Morocco
                <br />
                <i className="fa fa-phone-alt me-3"></i>00000000
                <br />
                <i className="fa fa-envelope me-3"></i>paul@gmail.com
              </address>
            </div>
            <div className="col-md-6">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    name="nom"
                    className="form-control"
                    placeholder="Nom"
                    value={formData.nom}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="prenom"
                    className="form-control"
                    placeholder="Prénom"
                    value={formData.prenom}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="sujet"
                    className="form-control"
                    placeholder="Sujet"
                    value={formData.sujet}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    name="message"
                    className="form-control"
                    rows="5"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
