/**
 * RutasController
 *
 * @description :: Server-side logic for managing rutas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  home: function (req,res) {
    return res.view('vistas/home');
  },
  error: function (req, res) {
    return res.view('vistas/error', {
      error: {
        desripcion: "Usted esta por error en esta Ruta dirijase a Inicio",
        rawError: "Ruta equivocada",
        url: "/"
      }
    });
  },
  crearHeroe: function (req, res) {
    return res.view('vistas/Heroe/crearHeroe');
  },
  crearPoder: function (req, res) {
    return res.view('vistas/Poder/crearPoder',{
      idHeroe:req.allParams().idHeroe
    });
  }
};