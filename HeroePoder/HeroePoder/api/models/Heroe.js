/**
 * Heroe.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre:{
      type:'string',
      required:true
    },
    Castillo:{
     type:'string',
      required:true
    },
    Nivel:{
      type:'integer',
      required:true
    },
    Poderes:{
      collection:'Poder',
      via:'idPoder'
    }

  }
};

