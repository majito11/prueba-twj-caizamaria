/**
 * RutasController
 *
 * @description :: Server-side logic for managing rutas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  home: function (req,res) {
    return res.view('Vistas/home');
  },
  error: function (req, res) {
    return res.view('Vistas/error', {
      error: {
        desripcion: "Usted esta por error en esta Ruta dirijase a Inicio",
        rawError: "Ruta equivocada",
        url: "/"
      }
    });
  },
  crearHeroe: function (req, res) {
    return res.view('Vistas/Heroe/crearHeroe');
  },
  crearPoder: function (req, res) {
    return res.view('Vistas/Poder/crearPoder',{
      idHeroe:req.allParams().idHeroe
    });
  }
};