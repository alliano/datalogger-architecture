export class ApplicationContext {
    constructor(){
        if(ApplicationContext.instance) return ApplicationContext.instance;
        else ApplicationContext.instance = this;
    }

    #CONTEXT = new Map();

    /**
     * 
     * @param {string} name
     * @param {{}} value
     */
    setContext(name, value){
        this.#CONTEXT.set(name, value);
    }

    /**
     * 
     * @param {string} name 
     */
    getContext(name){
        return this.#CONTEXT.get(name);
    }

    /**
     * 
     * @param {string} name 
     */
    remove(name){
        this.#CONTEXT.delete(name);
    }
}