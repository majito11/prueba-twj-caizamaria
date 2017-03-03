/**
 * PoderController
 *
 * @description :: Server-side logic for managing Poderes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  crearPoder: function (req, res) {
    var parametros = req.allParams();
    var PoderCrear = {
      nombre: parametros.nombrePoder,
      Daño: parametros.Daño,
      Nivel: parametros.Nivel
    };
    Poder.create(PoderCrear).exec(function (err, PoderCreado) {
      if (err) {
        return res.view('Vistas/error', {
          error: {
            descripcion: "Error al crear el Poder",
            rawError: err,
            url: "/Poder/crearPoder"
          }
        });
      }
      Poder.find().exec(function (errEncontrado, PoderesEncontrados) {
        if (errEncontrado) {
          return res.view('Vistas/error', {
            error: {
              descripcion: "Se presento un problema al cargar los Poderes",
              rawError: errEncontrado,
              url: "/listarPoderes"
            }
          });
        }
        res.view('Vistas/Poder/listarPoderes', {Poderes: NivelEncontrados});
      })
    });

  },
  listarNivel: function (req, res) {
    Poder.find().exec(function (errorEncontrado, NivelEncontrados) {
      if (errorEncontrado) {
        return res.view('Vistas/error', {
          error: {
            desripcion: "Problema a cargar todos los Nivel registrados",
            rawError: errorEncontrado,
            url: "/listarNivel"
          }
        });
      }
      res.view('Vistas/Poder/listarNivel', {Nivel: PoderesEncontrados});

    });

  },
  borrarPoder: function (req, res) {
    var parametros = req.allParams();
    if (parametros.id) {
      Poder.destroy({
        id: parametros.id
      }).exec(function (errorIndefinido, PoderBorrado) {
        if (errorIndefinido) {
          return res.view('Vistas/error', {
            error: {
              descripcion: "Error al borrar el Poder",
              rawError: errorIndefinido,
              url: "/listarPoderes"
            }
          });
        }
        Poder.find().exec(function (errorEncontrado, PoderesEncontrados) {
          if (errorEncontrado) {
            return res.view('Vistas/error', {
              error: {
                descripcion: "Ocurrio un problema en la carga de los Poderes",
                rawError: errorEncontrado,
                url: "/listarPoderes"
              }
            });
          }
          res.view('Vistas/Poder/listarPoderes', {
            Poderes: PoderesEncontrados
          });
        });
      });
    }
  },
  actualizarPoder: function (req, res) {
    var parametros = req.allParams();
    if (parametros.id) {
      Poder.findOne({
        id: parametros.id
      }).exec(function (errorInesperado, PoderEncontrado) {
        if (errorInesperado) {
          return res.view('Vistas/error', {
            error: {
              descripcion: "Se ha producido un error inesperado",
              rawError: errorInesperado,
              url: "/listarPoderes"
            }
          });
        }
        if (PoderEncontrado) {
          return res.view('Vistas/Poder/actualizarPoder', {
            Poder: PoderEncontrado
          });
        }
        else {
          return res.view('Vista/error', {
            error: {
              descripcion: "El Poder con el id: " + parametros.id + " no existe",
              rawError: "No existe el Poder",
              url: "/listarPoderes"
            }
          });
        }
      });

    }
  },

  actualizacionPoder: function (req, res) {
    var parametros = req.allParams();
    var PoderAActualizar = {
      nombre: parametros.nombrePoder,
      Daño: parametros.Daño,
      Nivel: parametros.Nivel
    }
    Poder.update({
      id: parametros.idPoder
    }, PoderAActualizar).exec(function (errorInesperado, PoderActualizado) {
      if (errorInesperado) {
        return res.view('Vistas/error', {
          error: {
            descripcion: "Se ha presentado un problema al actualizar el Poder",
            rawError: errorInesperado,
            url: "/listarPoderes"
          }
        });
      }
      Poder.find().exec(function (errorEncontrado, PoderesEncontrados) {
        if (errorEncontrado) {
          return res.view('Vistas/error', {
            error: {
              descripcion: "Se ha encontrado un error inesperado en la carga de los Poderes",
              rawError: errorEncontrado,
              url: "/listarPoderes"
            }
          });
        }
        res.view('Vistas/Poder/listarPoderes', {
          Poderes: PoderfesEncontrados
        });
      })
    })

  }
};


