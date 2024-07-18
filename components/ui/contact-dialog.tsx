'use client'

import * as React from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import useMediaQuery from "@custom-react-hooks/use-media-query";
import { Hedvig_Letters_Sans, Lora } from "next/font/google";
import { ArrowDownSquare } from "lucide-react";

const lora = Lora({ subsets: ["latin"], weight: ["500"] });
const hedvigLettersSans = Hedvig_Letters_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

export function ContactDialog() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 968px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger
          className="text-md font-semibold tracking-wide leading-6 text-yellow-950 cursor-pointer"
        >
          <span className={lora.className}>
            <ArrowDownSquare
              className="mb-0.5 inline mr-2 lg:mr-0 lg:hidden" 
              size={16}
            />{" "}
            Contact{" "}
            <ArrowDownSquare className="mb-0.5 hidden lg:inline" size={16} />
          </span>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[955px] bg-[#f3f1e9]">
          <DialogHeader>
            <DialogTitle>
              <span className="text-4xl font-semibold text-yellow-950">
                Contact Us
              </span>
            </DialogTitle>
            <DialogDescription className="mt-4 text-md text-yellow-950">
              <span className={hedvigLettersSans.className}>
                Have a question or want to get in touch? Fill out the form below
                and we&apos;ll get back to you as soon as possible.
              </span>
            </DialogDescription>
          </DialogHeader>
          <form
            className="grid grid-cols-1 gap-y-6"
            method="Post"
            action="https://docs.google.com/forms/d/e/1FAIpQLSfeyzGJ818-RLEU8zi0lKjhPD9EMewWYijq5BW_uusUmBuXnA/formResponse"
          >
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-yellow-950"
              >
                Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="entry.137060741"
                  id="name"
                  autoComplete="name"
                  className="block w-full focus:outline-none shadow-sm focus:ring-2 sm:text-sm focus:ring-yellow-950 focus:border-yellow-950 border-yellow-950 rounded-md h-12 p-4 bg-[#fffef9] font-sans"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-yellow-950"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="entry.802603831"
                  type="email"
                  autoComplete="email"
                  className="block w-full focus:outline-none shadow-sm focus:ring-2 sm:text-sm focus:ring-yellow-950 focus:border-yellow-950 border-yellow-950 rounded-md h-12 p-4 bg-[#fffef9] font-sans"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-yellow-950"
              >
                Message
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="entry.895958623"
                  rows={4}
                  className="block max-h-36 w-full focus:outline-none shadow-sm focus:ring-2 sm:text-sm focus:ring-yellow-950  focus:border-yellow-950 border-yellow-950 rounded-md p-4 bg-[#fffef9] font-sans"
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="sm:col-span-2 sm:flex sm:justify-end">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-yellow-950 hover:bg-yellow-950/80 focus:outline-none focus:ring-2  transition-all focus:ring-offset-2 focus:ring-yellow-950"
              >
                Send
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    );
  }
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger
        className="text-md font-semibold tracking-wide leading-6 text-yellow-950 cursor-pointer"
      >
        <span className={lora.className}>
          <ArrowDownSquare
            className="mb-0.5 inline mr-2 lg:mr-0 lg:hidden"
            size={16}
          />{" "}
          Contact{" "}
          <ArrowDownSquare className="mb-0.5 hidden lg:inline" size={16} />
        </span>
      </DrawerTrigger>
      <DrawerContent className="bg-[#f3f1e9]">
        <DrawerHeader>
          <DrawerTitle>
            <span className="text-4xl font-semibold text-yellow-950">
              Contact Us
            </span>
          </DrawerTitle>
          <DrawerDescription className="mt-4 text-md text-yellow-950">
            <span className={hedvigLettersSans.className}>
              Have a question or want to get in touch? Fill out the form below
              and we&apos;ll get back to you as soon as possible.
            </span>
          </DrawerDescription>
        </DrawerHeader>
        <form
          className="grid grid-cols-1 gap-y-6 px-4"
          method="Post"
          action="https://docs.google.com/forms/d/e/1FAIpQLSfeyzGJ818-RLEU8zi0lKjhPD9EMewWYijq5BW_uusUmBuXnA/formResponse"
        >
          <div className="sm:col-span-2">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-yellow-950"
            >
              Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="entry.137060741"
                id="name"
                autoComplete="name"
                className="block w-full focus:outline-none shadow-sm focus:ring-2 sm:text-sm focus:ring-yellow-950 focus:border-yellow-950 border-yellow-950 rounded-md h-12 p-4 bg-[#fffef9] font-sans"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-yellow-950"
            >
              Email
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="entry.802603831"
                type="email"
                autoComplete="email"
                className="block w-full focus:outline-none shadow-sm focus:ring-2sm:text-sm focus:ring-yellow-950 focus:border-yellow-950 border-yellow-950 rounded-md h-12 p-4 bg-[#fffef9] font-sans"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-yellow-950"
            >
              Message
            </label>
            <div className="mt-1">
              <textarea
                id="message"
                name="entry.895958623"
                rows={4}
                className="block max-h-36 w-full focus:outline-none shadow-sm focus:ring-2 sm:text-sm focus:ring-yellow-950  focus:border-yellow-950 border-yellow-950 rounded-md p-4 bg-[#fffef9] font-sans"
                defaultValue={""}
              />
            </div>
          </div>
          <div className="sm:col-span-2 sm:flex sm:justify-end">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center px-6 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-yellow-950 hover:bg-yellow-950/80 focus:outline-none focus:ring-2  transition-all focus:ring-offset-2 focus:ring-yellow-950"
            >
              Send
            </button>
          </div>
        </form>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
