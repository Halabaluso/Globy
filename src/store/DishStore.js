import { defineStore } from "pinia"
import { writeData, loadData, removeData, updateData } from "../db/firebasemethods"

const DishStore = defineStore("Dishstore", {
    state: () => ({
        Dish : {},
        Dishid: "",
        allDishs: {},
        lenDish: 0,

        booleanquickcomplete: false,
        arrayDishsQuickStart: []
    }),
    actions:{
        getDish(){
            return this.Dish
        },
        setDish(id, object){
            this.Dishid = id
            this.Dish = object
        },
        async modifyDish(string, object){
            const data = await updateData(string,object)
            return data
        },
        async deleteDish(querystring){
            const data = await removeData(querystring)
            return data
        },
        async getAllDishs(querystring){
            const data = await loadData(querystring)
            if(data !== false){
                this.allDishs = data
            }
            return data
        },
        async pushDish(querystring, object){
            let boolean = true
            await writeData(querystring, object)
            return boolean
            
        },
        takeObjectLen(object){
            const array = Object.values(object)
            this.lenDish = array.length
        }
    }
})

export {
    DishStore
}