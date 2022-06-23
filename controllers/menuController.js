const opcionesMenu = require("../data/opcionesMenu")

const menuController = {

    listMenu : (req, res) =>{res.render("index", { opciones: opcionesMenu})},
    
    menuPorId : (req, res) => {
                const menuId = parseInt(req.params.id, 10);
                let menuEncontrado; 
                for (let i = 0; i < opcionesMenu.length; i++) {
                    if (opcionesMenu[i].id === menuId) {
                        menuEncontrado = opcionesMenu[i];
                    }
                }
                if (!menuEncontrado){
                    res.send("No se encuentra el menu");
                }
                else {
                    res.render( "index",  {menu: menuEncontrado} );
                }
                }, 

    agregarOpcionMenu: (req, res) => {res.send("se ha agregado una opcion al menu");},

    borrarOpcionMenu: (req, res) => {
        const menuId = parseInt(req.params.id, 10);
        for (let i = 0; i < opcionesMenu.length; i++) {
            if ( opcionesMenu[i].id === menuId ) {
                opcionesMenu.splice(i, 1)
            }
        }
        res.send(`se ha borrado la opcion de menu con id ${menuId}`);
    }             
}

module.exports = menuController;