
const express = require('express');
const cors = require('cors');
const { clientesCollection, certificadosCollection } = require('./config');
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
    try {
        const clientesSnapshot = await clientesCollection.get();
        const clientesList = clientesSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        const certificadosSnapshot = await certificadosCollection.get();
        const certificadosList = certificadosSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        res.send({
            clientes: clientesList,
            certificados: certificadosList
        });
    } catch (error) {
        console.error("Error retrieving data:", error);
        res.status(500).send("Error retrieving data");
    }
});

app.listen(4000, () => console.log("Server is running on port 4000"));
