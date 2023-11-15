import { defineStore } from "pinia"
import { writeData, loadData, removeData, updateData, writeDataWithID } from "../db/firebasemethods"

const restaurantStore = defineStore("restaurantstore", {
    state: () => ({
        restaurant : {},
        restaurantid: "",
        allRestaurants: {},
        lenrestaurant: 0,

        booleanquickcomplete: false
    }),
    actions:{
        getRestaurant(){
            return this.restaurant
        },
        setRestaurant(id, object){
            this.restaurantid = id
            this.restaurant = object
        },
        async modifyRestaurant(string, object){
            const data = await updateData(string,object)
            return data
        },
        async deleteRestaurant(querystring){
            const data = await removeData(querystring)
            return data
        },
        async getAllRestaurants(querystring){
            const data = await loadData(querystring)
            if(data !== false){
                this.allRestaurants = data
            }
            return data
        },
        async pushRestaurant(querystring, object){
            let boolean = true
            await writeData(querystring, object)
            return boolean
            
        },
        async pushRestaurantId(querystring, object){
            const id = await writeDataWithID(querystring, object)
            return id
            
        },
        takeObjectLen(object){
            const array = Object.values(object)
            this.lenrestaurant = array.length
        }
    }
})

export {
    restaurantStore
}