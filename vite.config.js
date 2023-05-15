
// HACEMOS UNA CONFIGURACION PARA CARGAR LA APP EN GIT-HUB PAGES
// Creamos este archivo de VITE.config.js

// Hacemos esta importacion
    import { defineConfig } from "vite";

// hacemos esta exportacion mediante un Objeto. El nombre de base es el nombre del repositorio de Git-Hub Pages. en caso de no hacer esto nos daria error ya que esta intentando buscar los archivos       y no los encuentra
    export default defineConfig({
        base: '/backjack-new-vite/', // nombre del archivo de Git-Hub Pages
    })