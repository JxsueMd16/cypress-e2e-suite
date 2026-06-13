# Plan de Testing — Sauce Demo E2E

## Alcance

Suite de pruebas automatizadas E2E sobre [Sauce Demo](https://www.saucedemo.com) cubriendo los flujos críticos de autenticación, catálogo de productos y proceso de compra.

---

## Objetivos

- Verificar que los flujos críticos de la aplicación funcionan correctamente
- Detectar regresiones automáticamente en cada cambio de código
- Validar respuestas HTTP y comportamiento de la API

---

## Casos de prueba

### AUTH — `cypress/e2e/auth/login.cy.js`

| ID | Caso | Tipo | Estado |
|---|---|---|---|
| TC-01 | Login exitoso con credenciales válidas | E2E | ✅ Automatizado |
| TC-02 | Error con usuario bloqueado | E2E | ✅ Automatizado |
| TC-03 | Error con credenciales inválidas | E2E | ✅ Automatizado |
| TC-04 | Logout exitoso | E2E | ✅ Automatizado |

### PRODUCTS — `cypress/e2e/products/catalog.cy.js`

| ID | Caso | Tipo | Estado |
|---|---|---|---|
| TC-05 | Muestra 6 productos después del login | E2E | ✅ Automatizado |
| TC-06 | Ordenar productos de menor a mayor precio | E2E | ✅ Automatizado |
| TC-07 | Agregar producto al carrito | E2E | ✅ Automatizado |
| TC-08 | Ver detalle de un producto | E2E | ✅ Automatizado |

### CHECKOUT — `cypress/e2e/checkout/checkout.cy.js`

| ID | Caso | Tipo | Estado |
|---|---|---|---|
| TC-09 | Completar proceso de compra end-to-end | E2E | ✅ Automatizado |
| TC-10 | Checkout con carrito vacío | E2E | ✅ Automatizado |
| TC-11 | Error si faltan datos en el formulario | E2E | ✅ Automatizado |

### API — `cypress/e2e/api/api.cy.js`

| ID | Caso | Tipo | Estado |
|---|---|---|---|
| TC-12 | GET página principal responde 200 | API | ✅ Automatizado |
| TC-13 | GET recurso inexistente retorna 404 | API | ✅ Automatizado |
| TC-14 | GET respuesta contiene content-type html | API | ✅ Automatizado |
| TC-15 | GET tiempo de respuesta menor a 3 segundos | API | ✅ Automatizado |

---

## Criterios de aceptación

- 100% de los tests deben pasar en modo headless
- Tiempo de respuesta de la app menor a 3 segundos
- Sin errores de consola en flujos críticos

## Criterios de salida

- Pipeline de CI ejecuta la suite completa en cada push
- Reporte generado automáticamente en `cypress/reports`

---

## Herramientas

| Herramienta | Versión | Uso |
|---|---|---|
| Cypress | 15.x | Framework E2E y API testing |
| Node.js | 20.x | Runtime |
| Chrome | 149 | Navegador de pruebas |

---

## Ejecución

```bash
# Modo interactivo
npx cypress open

# Modo headless (CI)
npx cypress run
```

---

## Trazabilidad

| Requisito | Test ID | Archivo |
|---|---|---|
| Login funcional | TC-01, TC-02, TC-03 | `auth/login.cy.js` |
| Catálogo de productos | TC-05, TC-06, TC-07, TC-08 | `products/catalog.cy.js` |
| Proceso de compra | TC-09, TC-10, TC-11 | `checkout/checkout.cy.js` |
| Disponibilidad API | TC-12, TC-13, TC-14, TC-15 | `api/api.cy.js` |
