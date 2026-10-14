1. Investigación teórica
Paso a paso: de la URL a la página web
Cuando escribes una URL en el navegador y presionas Enter, ocurre una secuencia compleja de procesos en milisegundos:
1.Resolución DNS (Domain Name System): El navegador necesita traducir el nombre de dominio legible (ej. github.com) a una dirección IP numérica (ej. 140.82.112.3). Consulta su caché local, luego el sistema operativo, el router y, de ser necesario, los servidores DNS públicos o de tu proveedor de internet (ISP) hasta dar con la IP correcta.

2.Conexión TCP (Three-Way Handshake): Una vez obtenida la IP, el navegador establece una conexión con el servidor de destino mediante el protocolo TCP. Se intercambian paquetes especiales: SYN, SYN-ACK y ACK para abrir un canal de comunicación fiable.

3.Handshake TLS (Transport Layer Security): Si la URL usa https://, se ejecuta un proceso de negociación de seguridad. El cliente y el servidor acuerdan la versión de cifrado, intercambian certificados digitales para verificar la identidad del servidor y generan claves simétricas para cifrar todo el tráfico posterior.

4.Petición HTTP (Request): El navegador envía una solicitud HTTP/HTTPS al servidor web pidiendo el recurso específico (por ejemplo, GET /index.html HTTP/2). Esta petición incluye cabeceras con información del navegador (User-Agent), cookies y credenciales si aplican.

5.Respuesta HTTP (Response): El servidor procesa la solicitud, busca los archivos o ejecuta la lógica de backend necesaria, y devuelve una respuesta HTTP que incluye un código de estado (ej. 200 OK, 404 Not Found), las cabeceras de respuesta y el cuerpo del contenido (HTML, CSS, JavaScript, JSON, etc.). 
El navegador recibe estos datos y comienza a renderizar la página.

*Resolución DNS (Domain Name System): El navegador necesita traducir el nombre de dominio legible (ej. github.com) 
a una dirección IP numérica (ej. 140.82.112.3). Consulta su caché local, luego el sistema operativo, el router y, de ser necesario,
los servidores DNS públicos o de tu proveedor de internet (ISP) hasta dar con la IP correcta.

*Conexión TCP (Three-Way Handshake): Una vez obtenida la IP, el navegador establece una conexión con el servidor de destino
mediante el protocolo TCP. Se intercambian paquetes especiales: SYN, SYN-ACK y ACK para abrir un canal de comunicación fiable.

*Handshake TLS (Transport Layer Security): Si la URL usa https://, se ejecuta un proceso de negociación de seguridad. El cliente y el 
servidor acuerdan la versión de cifrado, intercambian certificados digitales para verificar la identidad del servidor y generan claves
simétricas para cifrar todo el tráfico posterior.

*Petición HTTP (Request): El navegador envía una solicitud HTTP/HTTPS al servidor web pidiendo el recurso específico (por ejemplo,
GET /index.html HTTP/2). Esta petición incluye cabeceras con información del navegador (User-Agent), cookies y credenciales si aplican.

*Respuesta HTTP (Response): El servidor procesa la solicitud, busca los archivos o ejecuta la lógica de backend necesaria,
y devuelve una respuesta HTTP que incluye un código de estado (ej. 200 OK, 404 Not Found), las cabeceras de respuesta y el cuerpo 
del contenido (HTML, CSS, JavaScript, JSON, etc.). El navegador recibe estos datos y comienza a renderizar la página.


Diferencia entre dominio, subdominio y hosting
Dominio: Es el nombre comercial y único que identifica a tu sitio web en internet (ej. misitio.com).

Subdominio: Es una ramificación creada a partir de ese dominio principal para alojar contenidos específicos o aplicaciones
separadas (ej. tienda.misitio.com o app.misitio.com).

Hosting (Alojamiento): Es el espacio físico en un servidor conectado a internet donde se almacenan los archivos, bases de datos y 
códigos de tu aplicación web para que estén accesibles 24/7.

¿Por qué se contratan por separado?
Se separan porque cumplen funciones totalmente distintas. El dominio es un activo de propiedad intelectual e identidad de marca 
(gestionado por un registrar), mientras que el hosting es un recurso de infraestructura de hardware o computación en la nube
(gestionado por un proveedor de servidores). Puedes cambiar de proveedor de hosting cuantas veces quieras sin perder tu dominio, 
bastando con "apuntar" el dominio al nuevo servidor mediante los registros DNS.

2. DNS (Domain Name System)
¿Qué es el DNS y por qué se le llama "la agenda de contactos de internet"?
El DNS es un sistema jerárquico y descentralizado que traduce nombres de dominio alfanuméricos comprensibles por humanos a
direcciones IP numéricas que entienden las computadoras. Se le conoce coloquialmente como "la agenda de contactos de internet"
 porque cumple la misma función que la lista de contactos de un teléfono: en lugar de memorizar números IP complejos (como 192.0.2.1),
solo necesitas recordar un nombre sencillo (google.com), y el sistema se encarga de buscar el número asociado.

Jerarquía DNS
La resolución de nombres sigue un recorrido estructurado cuando la información no está en caché:

Root Servers (Servidores Raíz): Son los primeros en ser consultados. No conocen la IP exacta, pero redirigen al servidor encargado del
TLD específico (como .com o .co).

TLD Servers (Servidores de Dominio de Nivel Superior): Gestionan las extensiones. Si buscas github.com, el servidor TLD .com redirige
la consulta hacia los servidores autoritativos específicos de GitHub.

Servidores Autoritativos: Son los servidores finales que contienen la información real y oficial de los registros DNS de un dominio
(configurados en tu proveedor de DNS). Devuelven la IP definitiva.

Resolver Recursivo (Recursive Resolver): Por lo general operado por tu proveedor de internet (ISP) o servicios externos
(como Cloudflare 1.1.1.1 o Google 8.8.8.8), actúa como intermediario recogiendo las respuestas de los niveles anteriores y 
entregándoselas al navegador.

Tipos de registro DNS
A: Mapea un dominio directamente a una dirección IPv4 (ej. valor: 192.0.2.1).

AAAA: Mapea un dominio a una dirección IPv6 (ej. valor: 2001:db8::1).

CNAME (Canonical Name): Crea un alias que apunta un dominio o subdominio hacia otro dominio canónico (ej.
[www.misitio.com](https://www.misitio.com) apunta a mi-app.netlify.app). No puede usarse en la raíz del dominio (@).

ALIAS / ANAME: Registros virtuales creados por proveedores de DNS para solucionar la limitación del CNAME en la raíz del dominio
(@). Permiten que un dominio raíz apunte a otro nombre de dominio resolviendo internamente la IP por ti.

MX (Mail Exchange): Especifica los servidores de correo electrónico encargados de recibir los emails del dominio, acompañados de 
una prioridad numérica (ej. 10 mail.misitio.com).

TXT: Almacena texto arbitrario asociado al dominio. Es fundamental para la seguridad y validación:

SPF (Sender Policy Framework): Define qué servidores de correo están autorizados a enviar emails en nombre del dominio.

DKIM (DomainKeys Identified Mail): Añade una firma digital a los correos salientes para garantizar que no fueron alterados en tránsito.

Verificación de propiedad: Utilizado por servicios como Google Search Console o GitHub para comprobar que controlas el dominio
(ej. google-site-verification=xyz...).

NS (Name Server): Indica qué servidores autoritativos son los responsables de responder consultas sobre el dominio.

SOA (Start of Authority): Contiene información administrativa clave sobre la zona DNS, como el correo del administrador,
el número de serie y los tiempos de actualización y caché (TTL).

TTL (Time to Live) y propagación
Qué es el TTL: Es un valor en segundos configurado en cada registro DNS que indica a los resolvers cuánto tiempo deben almacenar 
(caché) dicha respuesta antes de volver a consultarla.

Por qué un cambio no se ve de inmediato: Si configuras un TTL de 3600 segundos (1 hora), cualquier servidor o usuario que haya 
consultado tu dominio recientemente seguirá usando la IP antigua guardada en su caché durante ese periodo.

Propagación DNS: No es una propagación activa donde los cambios viajan por el mundo, sino el proceso pasivo en el cual las diferentes 
cachés globales van expirando (según su TTL respectivo) y vuelven a consultar los nuevos valores. Suele tardar desde unos pocos minutos 
hasta 24-48 horas en casos extremos con TTLs altos.

3. Dominios
Registrador vs. Proveedor de DNS vs. Hosting
Registrador (Registrar): Empresa acreditada (como Namecheap, GoDaddy, Name.com) donde compras legalmente el derecho de uso de un dominio por un periodo determinado.

Proveedor de DNS: El servicio que almacena y gestiona los registros técnicos (A, CNAME, MX) de tu dominio (puede ser el mismo registrador o servicios externos como Cloudflare).

Hosting: El servidor donde vive físicamente el código de tu web.

TLD genéricos vs. de código de país
genéricos (gTLD): Extensiones abiertas sin restricciones geográficas, como .com, .dev, .app, .org.

De código de país (ccTLD): Extensiones asociadas a una nación, como .co (Colombia) o .es (España). Algunos tienen requisitos
especiales de residencia o documentación local (por ejemplo, ciertos ccTLD exigen presencia o un representante legal en el país), 
mientras que otros como .co están abiertos globalmente para uso comercial.

WHOIS y Privacidad de dominio
WHOIS: Es una base de datos pública donde se puede consultar quién registró un dominio, datos de contacto,
fechas de creación y expiración, y los nameservers asociados.

Privacidad de dominio: Un servicio ofrecido por los registradores que oculta tus datos personales (nombre, email, teléfono, 
dirección física) en el directorio WHOIS público, reemplazándolos por datos genéricos de la empresa registradora para evitar spam, acoso y robo de identidad.

Nameservers y "apuntar el dominio"
Los nameservers (NS) son los servidores DNS autoritativos que indican dónde está la "central de mandos" de los registros de tu dominio.
"Apuntar el dominio a otro proveedor" (por ejemplo, cambiar los nameservers predeterminados de tu registrador por los de Cloudflare)
significa delegar la gestión total de tus registros DNS a ese nuevo proveedor.

Precios y renovaciones
Los precios de un dominio .com suelen rondar entre los $10 y $15 USD anuales, mientras que un .co puede variar entre $25 y $40 USD 
el primer año dependiendo del registrador.
El precio de renovación suele ser distinto (más alto) debido a que los registradores utilizan promociones de descuento para el primer 
año con el fin de atraer nuevos clientes, aplicando la tarifa estándar o regular a partir del segundo año.


4. HTTPS y certificados
TLS/SSL y qué protege
TLS (Transport Layer Security, sucesor de SSL) es un protocolo criptográfico que protege las comunicaciones en internet.
 Protege la confidencialidad e integridad de los datos transmitidos entre el navegador del usuario y el servidor, evitando ataques
de tipo Man-in-the-Middle (donde un tercero intercepta o modifica la información en tránsito, como contraseñas o tarjetas de crédito).

Autoridad Certificadora (CA) y Let's Encrypt
Autoridad Certificadora (CA): Una entidad de confianza reconocida por los sistemas operativos y navegadores que emite certificados
digitales verificando la identidad del titular del dominio.

Let's Encrypt: Una CA abierta, automatizada y gratuita respaldada por la Internet Security Research Group (ISRG) que democratizó el 
cifrado web al permitir a cualquier desarrollador obtener certificados SSL/TLS sin costo

Tipos de certificados
DV (Domain Validation): Valida únicamente que el solicitante controla el dominio. Se emite de forma automática y rápida.

OV (Organization Validation): La CA valida además la existencia legal y la identidad de la organización o empresa detrás del dominio.
Requiere verificación de documentos comerciales.

EV (Extended Validation): El nivel más alto de validación. La CA realiza rigurosas comprobaciones legales, físicas y operativas de la
empresa.

Certificado Wildcard
Es un certificado especial que protege un dominio y todos sus subniveles bajo un mismo formato utilizando un asterisco
(ej. *.misitio.com). Cifra tanto misitio.com como app.misitio.com, tienda.misitio.com, etc.

Error "Certificado no válido para este nombre"
Este error aparece cuando configuras un dominio personalizado en un servidor o CDN, pero el certificado SSL instalado en dicho servidor 
no incluye ese dominio específico en su lista de nombres alternativos (SAN - Subject Alternative Name). Ocurre comúnmente al apuntar un 
dominio nuevo antes de que el sistema automatizado de generación de certificados (como el de Netlify o Vercel) haya terminado de emitir 
y asociar el certificado correcto.

HSTS (HTTP Strict Transport Security)
Es una cabecera de seguridad (Strict-Transport-Security) que el servidor envía al navegador para ordenarle que, durante un tiempo 
determinado, nunca vuelva a realizar peticiones HTTP sin cifrar. Fuerza de manera estricta el uso de HTTPS, previniendo ataques de 
degradación de protocolo (SSL stripping).

5. Modelos de alojamiento

Hosting compartido

Ejemplos: Hostinger, cPanel

¿Cuándo usarlo?: Sitios web tradicionales basados en PHP/WordPress de bajo tráfico y presupuesto reducido.

VPS (Virtual Private Server)

Ejemplos: DigitalOcean Droplet, Linode, AWS EC2

¿Cuándo usarlo?: Aplicaciones personalizadas que requieren control total del sistema operativo, configuraciones a medida o 
bases de datos dedicadas.

Servidor dedicado

Ejemplos: OVH, Hetzner

¿Cuándo usarlo?: Proyectos empresariales masivos con un rendimiento de hardware exigente y exclusivo.

PaaS (Platform as a Service)

Ejemplos: Render, Railway, Heroku, Fly.io

¿Cuándo usarlo?: Aplicaciones de backend (Node.js, Python, Ruby) donde quieres despreocuparte de la infraestructura base y 
enfocarte en el código.

Serverless / Functions

Ejemplos: Vercel Functions, AWS Lambda, Supabase Edge Functions

¿Cuándo usarlo?: APIs y microservicios orientados a eventos que escalan automáticamente a cero cuando no se usan.

Hosting estático + CDN

Ejemplos: GitHub Pages, Netlify, Cloudflare Pages, Vercel

¿Cuándo usarlo?: Sitios web estáticos, documentación, blogs o aplicaciones frontend basadas en frameworks modernos (React, Vue).

BaaS (Backend as a Service)

Ejemplos: Supabase, Firebase, Appwrite

¿Cuándo usarlo?: Aplicaciones modernas que necesitan autenticación, bas de datos y almacenamiento listas para usar sin configurar
servidores propios.

Conceptos clave de alojamiento
CDN (Content Delivery Network): Es una red mundial de servidores distribuidos geográficamente que almacenan copias en caché de
tus archivos estáticos. Resuelve problemas de latencia entregando el contenido desde el servidor más cercano físicamente al usuario,
reduce la carga en el servidor de origen y acelera la carga.

Sitio estático vs. dinámico: Un sitio estático entrega archivos HTML, CSS y JS ya preconstruidos tal cual están almacenados. Un
sitio dinámico procesa código en el servidor (con lenguajes como PHP, Node.js o Python) en cada petición para generar la respuesta a 
medida (por ejemplo, consultando bases de datos en tiempo real).

Por qué una app React con Vite es estática al compilarse: Frameworks como React ejecutan JSX y componentes que, al ejecutar npm run
build, se traducen y empaquetan mediante procesos de bundling (como Rollup/Vite) en archivos puros de HTML, CSS y JavaScript plano listos
para ser servidos directamente por un CDN.

¿Qué es una SPA y por qué falla el enrutamiento en hostings estáticos? Una SPA (Single Page Application) carga un único archivo index.
html y maneja las rutas de forma interna en el navegador mediante JavaScript (ej. React Router). Si un usuario recarga directamente la 
página en una ruta interna como /dashboard, el servidor estático busca un archivo físico llamado dashboard o dashboard.html en el disco.
Al no encontrarlo, devuelve por defecto un Error 404. Para solucionarlo, se configuran reglas de redirección (rewrites) que fuerzan al 
servidor a reenviar siempre cualquier ruta hacia el index.html principal.


6. Comparativa de plataformas
GitHub Pages
Plan gratuito: Ancho de banda ilimitado (uso razonable), 10 builds/hora, 1 GB máx por repositorio.

Variables de entorno en el build: No de forma nativa (requiere acciones externas).

Rutas SPA sin configuración extra: No (requiere truco manual con un archivo 404.html).

Backend / Funciones serverless: No (solo contenido estático).

Dominio personalizado e HTTPS: Sí, incluye dominio personalizado y HTTPS automático.

Preview deployments por Pull Request: No.

Netlify
Plan gratuito: 100 GB/mes de ancho de banda, 300 minutos de build, 100 MB máx de tamaño de sitio.

Variables de entorno en el build: Sí.

Rutas SPA sin configuración extra: Sí (mediante un archivo _redirects).

Backend / Funciones serverless: Sí (Netlify Functions).

Dominio personalizado e HTTPS: Sí, incluye dominio personalizado y HTTPS automático.

Preview deployments por Pull Request: Sí.

Vercel
Plan gratuito: 100 GB/mes de ancho de banda, 6000 minutos de build, tamaño estándar optimizado.

Variables de entorno en el build: Sí.

Rutas SPA sin configuración extra: Sí (configuración automática).

Backend / Funciones serverless: Sí (Vercel Serverless Functions).

Dominio personalizado e HTTPS: Sí, incluye dominio personalizado y HTTPS automático.

Preview deployments por Pull Request: Sí.

Cloudflare Pages
Plan gratuito: Ancho de banda ilimitado, 500 builds/mes, tamaño estándar optimizado.

Variables de entorno en el build: Sí.

Rutas SPA sin configuración extra: Sí (mediante un archivo _redirects o _headers).

Backend / Funciones serverless: Sí (Cloudflare Workers).

Dominio personalizado e HTTPS: Sí, incluye dominio personalizado y HTTPS automático.

Preview deployments por Pull Request: Sí.

Render
Plan gratuito: 100 GB/mes de ancho de banda, 500 minutos de build, 100 MB de disco estático.

Variables de entorno en el build: Sí.

Rutas SPA sin configuración extra: Sí (configuración manual de rutas).

Backend / Funciones serverless: Sí (en planes de web services).

Dominio personalizado e HTTPS: Sí, incluye dominio personalizado y HTTPS automático.

Preview deployments por Pull Request: Sí (en planes compatibles).

Elección para proyecto: Para un proyecto moderno basado en React con frontend y backend ligero, Vercel o Cloudflare Pages
destacan por su integración nativa con Vite, gestión automática de rutas SPA, despliegues instantáneos de vista previa (Preview
Deployments) por cada Pull Request y excelente soporte de funciones serverless sin fricción.


7. Supabase en producción
Qué es un BaaS y componentes de Supabase
Un BaaS (Backend as a Service) es una plataforma en la nube que provee servicios de backend listos para consumir desde el frontend, evitando construir servidores desde cero. Supabase incluye:

Postgres: Base de datos relacional SQL completa y potente.

Auth: Sistema completo de autenticación de usuarios (Email, OAuth social, OTP).

Storage: Almacenamiento y gestión de archivos multimedia y documentos.

Realtime: Sincronización de datos en tiempo real mediante WebSockets basados en cambios de Postgres.

Edge Functions: Funciones serverless ejecutadas globalmente en el borde (TypeScript/Deno).

Anon key vs. Service_role key
Anon Key (Clave Anónima): Es una clave pública diseñada para ser utilizada en el navegador o cliente frontend. Respeta estrictamente
las políticas de seguridad (RLS) configuradas en la base de datos.

Service_role Key (Clave de Rol de Servicio): Es una clave privada y privilegiada que salta por completo las políticas RLS. Jamás debe
exponerse en el frontend ni incluirse en el código del cliente; debe usarse exclusivamente en entornos seguros de backend o servidores
privados.

RLS (Row Level Security)
Es una característica de seguridad a nivel de filas en PostgreSQL. Es obligatorio activarla si la anon key viaja en el navegador porque, 
al ser pública, cualquier usuario malintencionado podría inspeccionar las peticiones de red y consultar o modificar tablas completas de
la base de datos si no existen restricciones estrictas por cada registro.

Política RLS de ejemplo:
Permitir a un usuario autenticado leer y editar únicamente sus propias filas en una tabla llamada profiles vinculada a su auth.uid():

-- Habilitar RLS en la tabla
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Política de lectura (Select)
CREATE POLICY user_can_read_own_profile ON profiles
FOR SELECT USING (auth.uid() = user_id);

-- Política de actualización (Update)
CREATE POLICY user_can_update_own_profile ON profiles
FOR UPDATE USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);


CORS y URLs de redirección en Supabase Auth
Si no configuras correctamente la Site URL y las Redirect URLs en el panel de autenticación de Supabase al pasar a producción, 
los flujos de autenticación OAuth (como Google o GitHub) y la recuperación de contraseñas fallarán, ya que Supabase bloqueará el 
reenvío de tokens hacia dominios no autorizados por razones de seguridad (CORS / Redirect mismatch).

Límites del plan gratuito
Pausado automático del proyecto tras una semana de inactividad total de peticiones (puede reactivarse manualmente desde el panel).

Base de datos de hasta 500 MB.

Límite de ancho de banda y llamadas a la API generosas pero acotadas para prototipos y MVPs.

8. Variables de entorno y seguridad
Qué es una variable de entorno y .gitignore
Una variable de entorno es un valor dinámico externo al código fuente de la aplicación (como claves de API, URLs de bases de datos
o credenciales sensibles). El archivo .env que las contiene debe ir siempre en el .gitignore para evitar subir secretos confidenciales
 por accidente a repositorios públicos en GitHub.

Variables en Vite (VITE_) y seguridad
En Vite, cualquier variable de entorno que no comience con el prefijo VITE_ se mantiene estrictamente privada en el servidor de 
compilación. Por el contrario, todo lo que lleve el prefijo VITE_ es inyectado y expuesto directamente dentro del bundle de JavaScript
compilado, por lo que se vuelve completamente público y visible para cualquier usuario que inspeccione el código del navegador. Jamás
guardes claves privadas o secrets de backend con este prefijo.

Secretos de Build vs. Runtime
Secretos de Build (GitHub Secrets / Vercel Build Secrets): Se utilizan durante el proceso de compilación de la aplicación (por ejemplo,
para inyectar claves públicas de analítica o URLs de APIs estáticas en el bundle).

Secretos de Runtime: Son credenciales confidenciales de backend que operan de forma segura en servidores vivos o funciones serverless 
(como la service_role key de Supabase o contraseñas de bases de datos) y que nunca deben filtrarse al cliente.

Qué hacer si subiste una clave por error a Git
Rotar la clave inmediatamente: Ingresa al servicio correspondiente (Supabase, Firebase, AWS, etc.) y revoca o regenera la clave
comprometida.

Simplemente borrar el archivo en un commit posterior no sirve, ya que la clave permanece en el historial de commits de Git. Si es 
necesario, utiliza herramientas avanzadas como git-filter-repo o contacta al soporte del servicio, pero la prioridad absoluta siempre es 
invalidar la clave filtrada.


9. Build y despliegue
Qué hace npm run build y la carpeta dist/
Ejecuta el empaquetador del proyecto (como Vite, Webpack o Rollup), el cual compila, transpila y optimiza todo el código fuente de
 desarrollo (componentes React, TypeScript, módulos CSS) generando un conjunto de archivos estáticos puros (index.html, paquetes de
JavaScript minificados y hojas de estilo) ubicados dentro de la carpeta dist/, listos para producción.

Optimización en el Build
Minificación: Proceso de eliminar espacios en blanco, saltos de línea y acortar nombres de variables para reducir al máximo el peso de
los archivos.

Tree Shaking: Técnica que detecta y elimina del código final todas aquellas funciones, librerías o módulos importados que no se están 
utilizando en la aplicación.

Code Splitting: División del código en fragmentos (chunks) más pequeños para que el navegador solo descargue el código estrictamente 
necesario para la página actual, mejorando la velocidad de carga inicial.

Hashing de nombres de archivo: Adición de un hash criptográfico único al nombre de los archivos compilados (ej. main.a1b2c3d4.js). 
Esto obliga al navegador y a los CDN a descargar la versión nueva del archivo ante cualquier cambio, ignorando por completo la versión
guardada en caché.

CI/CD y GitHub Actions
CI/CD (Continuous Integration / Continuous Deployment): Práctica automatizada que compila, prueba y despliega el código cada vez que 
se realizan cambios en el repositorio.

GitHub Actions: La herramienta nativa de integración continua de GitHub que permite ejecutar workflows automatizados (scripts YAML) para
correr pruebas, linting y desplegar automáticamente la aplicación web en plataformas como Vercel, Netlify o servidores propios ante cada 
push o pull request.

Desplegar desde una rama vs. GitHub Actions
Desplegar desde una rama (ej. rama gh-pages): Es un mecanismo más manual o semi-automatizado donde tú compilas el proyecto localmente
(o mediante un script básico) y subes la carpeta dist/ ya generada a una rama específica del repositorio para que la plataforma la sirva.

Desplegar con un workflow de Actions: Es un enfoque profesional y robusto donde el servidor de GitHub Actions toma el código fuente
limpio (la rama main), ejecuta el comando de compilación en un entorno limpio y controlado, y transfiere el resultado al servicio de 
hosting, automatizando todo el ciclo sin intervención manual local.





