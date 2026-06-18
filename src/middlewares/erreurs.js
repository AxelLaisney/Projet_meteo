export function gestionErreurs(err, req, res, next){
    res.status(err.status ?? 500).json({erreur: err.message ?? "Erreur serveur"});
}