import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request: any) {
  const jwt = request.cookies.get(process.env.JWT_NAME);
  if(jwt){
      try {
          const { payload } = await jwtVerify(jwt.value, new TextEncoder().encode(process.env.JWT_SECRET));
          console.log(payload)
            if(payload.rol != 5){
              if(request.nextUrl.pathname.includes("/unidades") || request.nextUrl.pathname.includes("/fiscales") || request.nextUrl.pathname.includes("/rutas") || request.nextUrl.pathname.includes("/horarios")){
                return NextResponse.redirect(new URL("/", request.url));
              }
              }

    // Si el usuario está autenticado y está en la página de login, redirigir a la página principal
    if (request.nextUrl.pathname.includes("/login")) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    
    // Continuar con la solicitud si el usuario está autenticado
    return NextResponse.next();
  } catch (error) {
    // Si el usuario no está autenticado y no está en la página de login, redirigir a la página de login
    if (!request.nextUrl.pathname.includes("/login")) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    // Continuar con la solicitud si el usuario está en la página de login
    return NextResponse.next();
}
}else{
    // Si el usuario no está autenticado y no está en la página de login, redirigir a la página de login
    if (request.nextUrl.pathname != "/login") {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    // Continuar con la solicitud si el usuario está en la página de login
    return NextResponse.next();
}
}

export const config = {
  matcher: [
    "/login",
    "/fiscales/:path*",
    "/horarios/:path*",
    "/rutas/:path*",
    "/unidades/:path*",
    "/",
  ],
};
