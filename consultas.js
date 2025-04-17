const mysql = require("mysql");
const fs = require("fs");
const csv = require("csv-parser");
const path = require("path");

// Configuración de la conexión a la base de datos en el servidor
const connection = mysql.createConnection({
  host: "localhost", // Cambia esto por el host de tu servidor (por ejemplo, '192.168.x.x' o 'nombre_del_servidor')
  user: "root",    // Cambia esto por tu nombre de usuario en el servidor de MySQL
  password: "",    // Cambia esto por tu contraseña de MySQL
  database: "csv" // Cambia esto por el nombre de tu base de datos
});

connection.connect((err) => {
  if (err) {
    console.error("Error al conectar a la base de datos:", err);
    return;
  }
  console.log("Conectado a la base de datos.");
});

// Función para realizar operaciones en la base de datos con parámetros
async function bdOperation(query, values) {
  return new Promise((resolve, reject) => {
    connection.query(query, values, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

// Insertar datos desde un CSV en la tabla EKT_Bill_Products_Linea
async function insertarDatosDesdeCSV() {
  const filePath = path.resolve("./Catalogo_de_lineas.csv");
  const datos = [];

  fs.createReadStream(filePath)
    .pipe(csv())
    .on("data", (row) => {
      const clave = row["Clave"]?.trim();
      const nombre = row["Nombre"]?.trim();
      if (clave && nombre) {
        datos.push([nombre, clave]); // Almacenamos los datos como un array
      }
    })
    .on("end", async () => {
      console.log(`Se encontraron ${datos.length} registros para insertar.`);
      try {
        const query = `INSERT INTO EKT_Bill_Products_Linea (nombre, idClave) VALUES ?`;
        await bdOperation(query, [datos]);
        console.log("Todos los datos fueron insertados correctamente.");
      } catch (error) {
        console.error("Error al insertar en la base de datos:", error);
      }
    });
}

// Insertar datos desde un CSV en la tabla EKT_Bill_Products_Agrupacion_Linea
async function insertarLineasDesdeCSV() {
  const filePath = path.resolve("./catalogos_articulos_cgln.csv");
  const datos = [];

  fs.createReadStream(filePath)
    .pipe(csv())
    .on("data", (row) => {
      const codigoG = row["CodigoG"]?.trim();
      const nombreG = row["NombreGrupo "]?.trim();
      if (codigoG && nombreG) {
        datos.push([codigoG, nombreG]); // Almacenamos los datos como un array
      }
    })
    .on("end", async () => {
      console.log(`Se leyeron ${datos.length} líneas.`);
      try {
        const query = `INSERT INTO EKT_Bill_Products_Agrupacion_Linea (Id, nombre) VALUES ?`;
        await bdOperation(query, [datos]);
        console.log("Todos los datos fueron insertados correctamente.");
      } catch (error) {
        console.error("Error al insertar en la base de datos:", error);
      }
    });
}

// Insertar relaciones desde un CSV en la tabla EKT_Bill_Products_Linea_Agrupacion_Relacion
async function insertarRelacionAgrupacion() {
  const filePath = path.resolve("./Catalogo_de_lineas_agrupacion.csv");
  const datos = [];

  fs.createReadStream(filePath)
    .pipe(csv())
    .on("data", (row) => {
      const codigoL = row["CodigoL"]?.trim();
      const codigoA = row["CodigoDeAgrupacion"]?.trim();
      if (codigoL && codigoA) {
        datos.push([codigoL, codigoA]); // Almacenamos los datos como un array
      }
    })
    .on("end", async () => {
      console.log(`Se leyeron ${datos.length} relaciones.`);
      try {
        const query = `INSERT INTO EKT_Bill_Products_Linea_Agrupacion_Relacion (idLinea, idAgrupacionLinea) VALUES ?`;
        await bdOperation(query, [datos]);
        console.log("Todas las relaciones fueron insertadas correctamente.");
      } catch (error) {
        console.error("Error al insertar en la base de datos:", error);
      }
    });
}

// Llamar a las funciones para insertar los datos desde los CSV
// Puedes descomentar estas funciones para ejecutarlas
// insertarDatosDesdeCSV();
// insertarLineasDesdeCSV();
// insertarRelacionAgrupacion();

// Cerrar la conexión al finalizar
connection.end();
