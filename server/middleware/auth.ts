import jwt from "jsonwebtoken";

export function verifyJWT(req: any, res: any, next: any) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).send({ error: "No token" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    req.user = decoded; // 🔥 attach user to request
    next();
  } catch {
    return res.status(403).send({ error: "Invalid token" });
  }
}
