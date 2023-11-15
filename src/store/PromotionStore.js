import { defineStore } from "pinia"
import { writeData, loadData, removeData, updateData } from "../db/firebasemethods"

const PromotionStore = defineStore("Promotionstore", {
    state: () => ({
        Promotion : {},
        Promotionid: "",
        allPromotions: {},
        lenPromotion: 0
    }),
    actions:{
        getPromotion(){
            return this.Promotion
        },
        setPromotion(id, object){
            this.Promotionid = id
            this.Promotion = object
        },
        async modifyPromotion(string, object){
            const data = await updateData(string,object)
            return data
        },
        async deletePromotion(querystring){
            const data = await removeData(querystring)
            return data
        },
        async getAllPromotions(querystring){
            const data = await loadData(querystring)
            if(data !== false){
                this.allPromotions = data
            }
            return data
        },
        async pushPromotion(querystring, object){
            let boolean = true
            await writeData(querystring, object)
            return boolean
            
        },
        takeObjectLen(object){
            const array = Object.values(object)
            this.lenPromotion = array.length
        }
    }
})

export {
    PromotionStore
}