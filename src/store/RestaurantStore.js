import { defineStore } from "pinia"

const restaurantStore = defineStore("restaurantstore", {
    state: () => ({
        restaurant : {},
        allRestaurants: {}
    }),
    actions:{
        getRestaurant(){
            return this.restaurant
        },
        getAllRestaurants(){
            return this.allRestaurants
        },
        setRestaurant(object){
            this.restaurant = object
        },
        pushRestaurant(id, object){
            this.allRestaurants[id] = object
        }
    }
})

export {
    restaurantStore
}