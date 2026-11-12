import { MessageCircle } from "lucide-react";

export function ChatFab() {
  return (
    <a
      href="#chat-admin"
      className="group fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full border-2 border-ink bg-[#3ee07f] py-2.5 pl-3 pr-4 font-display text-sm font-extrabold text-ink shadow-hard transition duration-200 hover:-translate-y-1 hover:shadow-hard-lg sm:bottom-6 sm:right-6"
    >
      <span className="relative grid size-7 place-items-center rounded-full bg-ink text-[#3ee07f]">
        <MessageCircle className="size-4 fill-current" strokeWidth={0} />
        <span className="absolute -right-0.5 -top-0.5 size-2.5 rounded-full border-2 border-ink bg-tangerine" />
      </span>
      Chat Admin
    </a>
  );
}
