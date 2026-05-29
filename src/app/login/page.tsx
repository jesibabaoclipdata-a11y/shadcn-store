import { LoginForm } from "@/components/login-form";

export default function LoginPage() {
  return (
    <div className="relative min-h-svh flex items-center justify-center p-6 md:p-10 overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://scontent.fceb1-3.fna.fbcdn.net/v/t39.30808-6/566323834_1321203576684608_989532249125667275_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=DRchw7FUer8Q7kNvwFt45sU&_nc_oc=Adqy-qUwu0minjZ27mDu946E-jdI2Jcn9lxqEZwSEh3ZN4ahFkCM-e_-lkyuDji1rjI&_nc_zt=23&_nc_ht=scontent.fceb1-3.fna&_nc_gid=eBgNfdzkmrgTTG1nmP-PIQ&_nc_ss=7b289&oh=00_Af7sqEPEl_BtX-y9SjJZPS8nKE8rsO1uqiVZS7Rj3IVLpQ&oe=6A1F08E9')",
        }}
      />

      {/* Dark overlay with 85% opacity */}
      <div className="absolute inset-0 bg-black/85" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-sm md:max-w-4xl">
        <LoginForm />
      </div>

    </div>
  );
}