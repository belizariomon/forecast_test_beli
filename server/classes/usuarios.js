// {
//     id: 'ALkjdaklsdj-asdkj',
//     nombre: 'Fernando',
// }



class Usuarios {

    constructor() {
        this.personas = [];
    }

    agregarPersona(id, nombre, sala) {

        let per = this.personas.find(x => x.nombre === nombre);
        if (per == undefined) {
            let persona = { id, nombre, sala };

            this.personas.push(persona);
        }
        return this.personas;
    }

    getPersona(p_id) {
        let persona = this.personas.filter(persona => persona.id === p_id)[0];
        return persona;
    }

    getPersonas() {
        return this.personas;
    }

    getPersonasPorSala(sala) {
        let personasEnSala = this.personas.filter(persona => persona.sala === sala);
        return personasEnSala;
    }

    borrarPersona(id) {

        let personaBorrada = this.getPersona(id);

        this.personas = this.personas.filter(persona => persona.id != id);
        return personaBorrada;

    }

    limpiarSala() {
        this.personas = [];
    }
    
}

    module.exports = {
    Usuarios
    } 