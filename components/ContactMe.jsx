"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { Textarea } from "./ui/textarea";

const Contact = () => {
  const form = useRef();

  const handleEmailSend = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7m9afg8", // EmailJS Service ID
        "template_q6b4inj", // EmailJS Template ID
        form.current,
        "slWGPJjjnClX2GNvf", // Public Key (User ID)
      )
      .then(
        () => {
          alert("Email send SUCCESS!");
        },
        (error) => {
          alert("FAILED...", error.text);
        },
      );
  };

  return (
    <div id="contact-me" className=" pt-20">
      <div className="shadow-input mx-auto my-10 w-full max-w-md rounded-none border-2 bg-white/30 p-4 dark:bg-black md:rounded-2xl md:p-8 ">
        <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
          Contact Me
        </h2>
        <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
          Contact me if you have anything to know about me.
        </p>
        <form className="my-8" ref={form} onSubmit={handleEmailSend}>
          <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
            <LabelInputContainer>
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                name="user_name"
                id="fullName"
                placeholder="Full Name"
                type="text"
              />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              name="user_email"
              id="email"
              placeholder="your@email.com"
              type="email"
            />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="textarea">Message</Label>
            <Textarea
              name="message"
              id="textarea"
              placeholder="Enter your message."
              className="h-32"
            />
          </LabelInputContainer>

          <button
            name="send"
            className="group/btn relative mt-5 block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Send &rarr;
            <BottomGradient />
          </button>
        </form>
      </div>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};

export default Contact;
