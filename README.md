# Demo de la Aplicación Angular

**Demo:**  https://mpos-technical-test.vercel.app


## Ejecución del proyecto

Para ejecutar este proyecto necesitas:  

- Angular CLI versión 19 o superior  
- Node.js compatible con Angular 19  

Pasos:  

```bash
git clone https://github.com/devsantiagobm/mpos-technical-test.git santiago-barrera-test
cd santiago-barrera-test
npm install
ng serve
```
Luego abre tu navegador en http://localhost:4200


## Persistencia

La persistencia de datos en esta aplicación se logra usando señales de Angular junto con localStorage, lo que permite mantener el estado de la aplicación incluso después de recargar la página.

## Principales decisiones de diseño

- La aplicación sigue una Screaming Architecture basada en features. Actualmente, la única feature implementada es purchase (compras). La arquitectura está pensada para crecer la aplicación de manera sencilla y sin complicaciones.

- Para una explicación más detallada sobre esta decisión, revisa:
app/features/auth/readme.md


- Cada página, módulo o feature tiene su propio contexto, pudiendo contener:

    Componentes, servicios, utilidades y otros elementos específicos de esa feature
     
    Esta estructura permite que cada feature crezca de manera independiente y mantenga su encapsulamiento.

- Para los componentes se utilizó Atomic Design, lo que permite organizar los componentes en átomos, moléculas y organismos.
