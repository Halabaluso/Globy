import { defineStore } from "pinia"
import { writeData, loadData, removeData, updateData, writeDataWithID } from "../db/firebasemethods"

const MenuStore = defineStore("Menustore", {
    state: () => ({
        Menu : {},
        Menuid: "",
        allMenus: {},
        lenMenu: 0,

        booleanquickcomplete: false,
        arrayMenusQuickStart: [],

    }),
    actions:{
        getMenu(){
            return this.Menu
        },
        setMenu(id, object){
            this.Menuid = id
            this.Menu = object
        },
        async modifyMenu(string, object){
            const data = await updateData(string,object)
            return data
        },
        async deleteMenu(querystring){
            const data = await removeData(querystring)
            return data
        },
        async getAllMenus(querystring){
            const data = await loadData(querystring)
            if(data !== false){
                this.allMenus = data
            }
            return data
        },
        async pushMenu(querystring, object){
            let boolean = true
            await writeData(querystring, object)
            return boolean
            
        },
        async pushMenuId(querystring, object){
            const id = await writeDataWithID(querystring, object)
            return id
            
        },
        takeObjectLen(object){
            const array = Object.values(object)
            this.lenMenu = array.length
        }
    }
})

export {
    MenuStore
}