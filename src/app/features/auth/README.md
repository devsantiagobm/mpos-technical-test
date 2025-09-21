# Carpeta `features/auth/`

Esta carpeta no contiene implementación. Se deja únicamente como ejemplo para documentar la decisión arquitectónica del proyecto.

## ¿Por qué existe si está vacía?

Actualmente, la aplicación solo implementa el proceso de compras en `features/purchase/`.  
Sin embargo, la estructura está pensada para ser escalable, por lo que cada gran proceso de negocio tendrá su propio espacio dentro de `features/`.

Ejemplo actual: 

    features/
    └── purchase/

Ejemplo futuro:

Ejemplo futuro:

    features/
    ├── purchase/ # Proceso de compras
    ├── auth/ # Autenticación y registro de usuarios
    ├── support/ # Soporte al cliente
    └── dashboard/ # Panel de administración


## Objetivo de esta carpeta

- Demostrar cómo se organizarán futuros features.  
- Explicar por qué la carpeta `features/` existe aunque actualmente solo haya uno.  
- Evitar refactors en el futuro, dejando la estructura lista para crecer.

## Regla de diseño

- Todo lo que pertenezca a un proceso de negocio vive en `features/[nombre_del_feature]`.  
- Cada feature puede incluir su propio layout, rutas, componentes y servicios.  
- El código compartido entre features debe ir en `shared/` o `core/`, nunca en otro feature.

## Resumen

Esta carpeta está intencionalmente vacía. Su única función es documentar la arquitectura y mostrar cómo se agregarán futuros procesos de negocio.
