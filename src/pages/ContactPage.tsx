import { motion } from "framer-motion";
import {  Mail, MapPin } from "lucide-react";
import Button from "../components/common/Button";

function Contact() {
  return (
    <main className="min-h-screen bg-background px-5 py-10 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-5xl">

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div initial={{ opacity: 0, x: -25 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <span className="font-[geo] text-sm font-medium text-primary">Contact</span>

            <h1 className="mt-3 font-[geo] text-3xl font-bold leading-tight text-text-primary sm:text-4xl">
              Let’s work together.
            </h1>

            <p className="mt-5 max-w-md font-[geo] text-sm leading-7 text-text-secondary sm:text-base">
              Have a project in mind or want to discuss a new opportunity? You can contact me through email or social media.
            </p>

            <div className="mt-8 space-y-4">
              <a href="mailto:mrs.dorsa.vali@gmail.com" className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-primary/40">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </span>

                <div>
                  <span className="block font-[geo] text-xs text-text-secondary">Email</span>
                  <span className="mt-1 block font-[geo] text-sm text-text-primary">
                    mrs.dorsa.vali@gmail.com
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </span>

                <div>
                  <span className="block font-[geo] text-xs text-text-secondary">Location</span>
                  <span className="mt-1 block font-[geo] text-sm text-text-primary">
                    Available for remote work
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-7 flex items-center gap-3">
              <a href="https://github.com/Dorsavali" target="_blank" rel="noreferrer" aria-label="GitHub" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-text-secondary transition-all hover:border-primary hover:text-primary">
               <img
                          src="/images/footer/github.svg"
                          alt="github"
                          className="h-5 w-5"
                        />
              </a>

              <a href="https://linkedin.com/in/dorsavalli" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-text-secondary transition-all hover:border-primary hover:text-primary">
                <img
                          src="/images/footer/LinkedIn.svg"
                          alt="linkedin"
                          className="h-5 w-5"
                        />
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 25 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-7">
            <form action="https://formsubmit.co/mrs.dorsa.vali@gmail.com" method="POST" className="space-y-5">
              <input type="hidden" name="_subject" value="New Portfolio Message" />
              <input type="hidden" name="_captcha" value="false" />

              <div>
                <label htmlFor="name" className="mb-2 block font-[geo] text-sm text-text-primary">
                  Name
                </label>

                <input id="name" name="name" type="text" required placeholder="Your name" className="w-full rounded-xl border border-white/10 bg-background/60 px-4 py-3 font-[geo] text-sm text-text-primary outline-none transition-colors placeholder:text-text-secondary/60 focus:border-primary" />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block font-[geo] text-sm text-text-primary">
                  Email
                </label>

                <input id="email" name="email" type="email" required placeholder="you@example.com" className="w-full rounded-xl border border-white/10 bg-background/60 px-4 py-3 font-[geo] text-sm text-text-primary outline-none transition-colors placeholder:text-text-secondary/60 focus:border-primary" />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block font-[geo] text-sm text-text-primary">
                  Message
                </label>

                <textarea id="message" name="message" rows={6} required placeholder="Tell me about your project..." className="w-full resize-none rounded-xl border border-white/10 bg-background/60 px-4 py-3 font-[geo] text-sm text-text-primary outline-none transition-colors placeholder:text-text-secondary/60 focus:border-primary" />
              </div>

              <Button type="submit" className="flex w-full items-center justify-center gap-2">
                <Mail className="h-4 w-4" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

export default Contact;