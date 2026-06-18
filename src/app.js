import express, { application } from 'express';
import swaggerUi from "swagger-ui-express"
import swaggerJSDoc from 'swagger-jsdoc';
import relevesRoutes from '../src/router/relevesRoutes.js';
import villeRoutes from '../src/router/villeRoutes.js';
import statsRoute from '../src/router/statsRoutes.js'


const app = express();

app.use(express.json());

const spec = swaggerJSDoc({
    definition: { openapi: "3.0.0", info: { title: "MétéoAPI", version: "1.0.0" } },
apis: ["./src/router/*.js"], // fichiers où chercher les annotations
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(spec));

app.use("/releves", relevesRoutes);
app.use("/villes", villeRoutes);
app.use("/stats", statsRoute);
app.use('/', (async (req, res) => { res.redirect("/api-docs")}));


export default app;