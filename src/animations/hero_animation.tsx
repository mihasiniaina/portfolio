import { useState, useEffect, useRef } from "react";

const TYPE_SPEED   = 55;
const DELETE_SPEED = 28;
const PAUSE_AFTER  = 2200;

type Phase = "typing" | "pausing" | "deleting";

interface TypewriterState {
  displayed:   string;
  phraseIndex: number;
  phase:       Phase;
}

export function useNindoTypewriter(phrases: string[]) {
  const [state, setState] = useState<TypewriterState>({
    displayed:   "",
    phraseIndex: 0,
    phase:       "typing",
  });

  const stateRef = useRef(state);
  useEffect(() => { stateRef.current = state; }, [state]);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!phrases?.length) return;

    function tick() {
      const { displayed, phraseIndex, phase } = stateRef.current;
      const current = phrases[phraseIndex];

      if (phase === "typing") {
        if (displayed.length < current.length) {
          setState((s) => ({ ...s, displayed: current.slice(0, displayed.length + 1) }));
          timerRef.current = setTimeout(tick, TYPE_SPEED);
        } else {
          setState((s) => ({ ...s, phase: "pausing" }));
          timerRef.current = setTimeout(tick, PAUSE_AFTER);
        }
        return;
      }

      if (phase === "pausing") {
        setState((s) => ({ ...s, phase: "deleting" }));
        timerRef.current = setTimeout(tick, DELETE_SPEED);
        return;
      }

      if (phase === "deleting") {
        if (displayed.length > 0) {
          setState((s) => ({ ...s, displayed: displayed.slice(0, -1) }));
          timerRef.current = setTimeout(tick, DELETE_SPEED);
        } else {
          const next = (phraseIndex + 1) % phrases.length;
          setState({ displayed: "", phraseIndex: next, phase: "typing" });
          timerRef.current = setTimeout(tick, TYPE_SPEED);
        }
        return;
      }
    }

    timerRef.current = setTimeout(tick, TYPE_SPEED);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [phrases]);

  return { displayed: state.displayed, phraseIndex: state.phraseIndex };
}