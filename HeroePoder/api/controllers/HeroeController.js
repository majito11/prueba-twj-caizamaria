/**
 * HeroeController
 *
 * @description :: Server-side logic for managing Heroees
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  crearHeroe: function (req, res) {
    var parametros = req.allParams();
    var HeroeCrear = {
      nombre: parametros.nombreHeroe,
      Castillo: parametros.Castillo,
      Nivel: parametros.Nivel
    };
    Heroe.create(HeroeCrear).exec(function (err, HeroeCreado) {
      if (err) {
        return res.view('Vistas/error', {
          error: {
            descripcion: "Error al crear el Heroe",
            rawError: err,
            url: "/Heroe/crearHeroe"
          }
        });
      }
      Heroe.find().exec(function (errEncontrado, HeroesEncontrados) {
        if (errEncontrado) {
          return res.view('Vistas/error', {
            error: {
              descripcion: "Se presento un problema al cargar los Heroes",
              rawError: errEncontrado,
              url: "/listarHeroes"
            }
          });
        }
        res.view('Vistas/Heroe/listarHeroes', {Heroes: HeroesEncontrados});
      })
    });

  },
  listarHeroes: function (req, res) {
    Heroe.find().exec(function (errorEncontrado, HeroesEncontrados) {
      if (errorEncontrado) {
        return res.view('Vistas/error', {
          error: {
            desripcion: "Problema a cargar todos los Heroes registrados",
            rawError: errorEncontrado,
            url: "/listarHeroes"
          }
        });
      }
      res.view('Vistas/Heroe/listarHeroes', {Heroes: HeroesEncontrados});

    });

  },
  borrarHeroe: function (req, res) {
    var parametros = req.allParams();
    if (parametros.id) {
      Heroe.destroy({
        id: parametros.id
      }).exec(function (errorIndefinido, HeroeBorrado) {
        if (errorIndefinido) {
          return res.view('Vistas/error', {
            error: {
              descripcion: "Error al borrar el Heroe",
              rawError: errorIndefinido,
              url: "/listarHeroes"
            }
          });
        }
        Heroe.find().exec(function (errorEncontrado, HeroesEncontrados) {
          if (errorEncontrado) {
            return res.view('Vistas/error', {
              error: {
                descripcion: "Ocurrio un problema en la carga de los Heroes",
                rawError: errorEncontrado,
                url: "/listarHeroes"
              }
            });
          }
          res.view('Vistas/Heroe/listarHeroes', {
            Heroes: HeroesEncontrados
          });
        });
      });
    }
  },
  actualizarHeroe: function (req, res) {
    var parametros = req.allParams();
    if (parametros.id) {
      Heroe.findOne({
        id: parametros.id
      }).exec(function (errorInesperado, HeroeEncontrado) {
        if (errorInesperado) {
          return res.view('Vistas/error', {
            error: {
              descripcion: "Se ha producido un error inesperado",
              rawError: errorInesperado,
              url: "/listarHeroes"
            }
          });
        }
        if (HeroeEncontrado) {
          return res.view('Vistas/Heroe/actualizarHeroe', {
            Heroe: HeroeEncontrado
          });
        }
        else {
          return res.view('Vista/error', {
            error: {
              descripcion: "El Heroe con el id: " + parametros.id + " no existe",
              rawError: "No existe el Heroe",
              url: "/listarHeroes"
            }
          });
        }
      });

    }
  },

  actualizacionHeroe: function (req, res) {
    var parametros = req.allParams();
    var HeroeAActualizar = {
      nombre: parametros.nombreHeroe,
      Castillo: parametros.fechaCreacion,
      Nivel: parametros.Nivel
    }
    Heroe.update({
      id: parametros.idHeroe
    }, HeroeAActualizar).exec(function (errorInesperado, HeroeActualizado) {
      if (errorInesperado) {
        return res.view('Vistas/error', {
          error: {
            descripcion: "Se ha presentado un problema al actualizar el Heroe",
            rawError: errorInesperado,
            url: "/listarHeroes"
          }
        });
      }
      Heroe.find().exec(function (errorEncontrado, HeroesEncontrados) {
        if (errorEncontrado) {
          return res.view('Vistas/error', {
            error: {
              descripcion: "Se ha encontrado un error inesperado en la carga de los Heroes",
              rawError: errorEncontrado,
              url: "/listarHeroes"
            }
          });
        }
        res.view('Vistas/Heroe/listarHeroes', {
          Heroes: HeroeCrsEncontrados
        });
      })
    })

  }
};


