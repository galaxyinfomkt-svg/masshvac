"use client";

import { Phone, MessageSquare, FileText } from "lucide-react";
import { PHONE_DISPLAY, TEL_HREF } from "@/data/company";
import { OPEN_CHAT_EVENT } from "@/components/DeferredChatWidget";

/**
 * Always-visible bottom action bar for mobile: Call · Quote · Chat.
 *
 * The LeadConnector chat used to auto-load on mobile and its launcher +
 * "Hi there!" prompt covered the hero Call button and intercepted taps on
 * "Get Quote" (verified in production: 62 tap attempts blocked). On mobile
 * the chat now loads only when the visitor taps "Chat" here.
 */
export default function MobileStickyBar() {
  return (
    <nav
      aria-label="Quick contact actions"
      className="lg:hidden fixed bottom-0 inset-x-0 z-40 grid grid-cols-3 bg-white/95 backdrop-blur border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] pb-[env(safe-area-inset-bottom)]"
    >
      <a
        href={TEL_HREF}
        className="flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-accent to-accent-dark text-white font-bold text-sm"
        aria-label={`Call Mass HVAC at ${PHONE_DISPLAY}`}
      >
        <Phone className="w-4 h-4" aria-hidden="true" />
        Call
      </a>
      <a href="#quote" className="flex items-center justify-center gap-2 py-3.5 text-primary font-bold text-sm border-l border-gray-200">
        <FileText className="w-4 h-4" aria-hidden="true" />
        Quote
      </a>
      <button
        type="button"
        onClick={() => window.dispatchEvent(new Event(OPEN_CHAT_EVENT))}
        className="flex items-center justify-center gap-2 py-3.5 text-primary font-bold text-sm border-l border-gray-200"
      >
        <MessageSquare className="w-4 h-4" aria-hidden="true" />
        Chat
      </button>
    </nav>
  );
}
