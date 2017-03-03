/**
 * Poder.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  Nombre:{
    type:'string',
    required:true
  },
  Daño:{
    type:'integer',
    required:true
  },
  Nivel:{
    type:'integer',
      required:true
    },
    idPoder:{
    model:'Heroe',
      required:true
    }
  }
};

