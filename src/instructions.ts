import { store as _store } from "./store";

export function sa(stackA: number[]): void {
  if (stackA.length >= 2) {
    [stackA[0], stackA[1]] = [stackA[1], stackA[0]];
  }
}

export function sb(stackB: number[]): void {
  if (stackB.length >= 2) {
    [stackB[0], stackB[1]] = [stackB[1], stackB[0]];
  }
}

export function ss(stackA: number[], stackB: number[]): void {
  sa(stackA);
  sb(stackB);
}

export function pa(stackA: number[], stackB: number[]): void {
  if (stackB.length > 0) {
    stackA.unshift(stackB.shift()!);
  }
}

export function pb(stackA: number[], stackB: number[]): void {
  if (stackA.length > 0) {
    stackB.unshift(stackA.shift()!);
  }
}

export function ra(stackA: number[]): void {
  if (stackA.length >= 2) {
    stackA.push(stackA.shift()!);
  }
}

export function rb(stackB: number[]): void {
  if (stackB.length >= 2) {
    stackB.push(stackB.shift()!);
  }
}

export function rr(stackA: number[], stackB: number[]): void {
  ra(stackA);
  rb(stackB);
}

export function rra(stackA: number[]): void {
  if (stackA.length >= 2) {
    stackA.unshift(stackA.pop()!);
  }
}

export function rrb(stackB: number[]): void {
  if (stackB.length >= 2) {
    stackB.unshift(stackB.pop()!);
  }
}

export function rrr(stackA: number[], stackB: number[]): void {
  rra(stackA);
  rrb(stackB);
}

export function run_instruction(instruction: string, store: typeof _store) {
  switch (instruction) {
    case "sa":
      sa(store.stackA);
      break;
    case "sb":
      sb(store.stackB);
      break;
    case "ss":
      ss(store.stackA, store.stackB);
      break;
    case "pa":
      pa(store.stackA, store.stackB);
      break;
    case "pb":
      pb(store.stackA, store.stackB);
      break;
    case "ra":
      ra(store.stackA);
      break;
    case "rb":
      rb(store.stackB);
      break;
    case "rr":
      rr(store.stackA, store.stackB);
      break;
    case "rra":
      rra(store.stackA);
      break;
    case "rrb":
      rrb(store.stackB);
      break;
    case "rrr":
      rrr(store.stackA, store.stackB);
      break;
  }
}

export const revertToPosition = async (
  instruction: string,
  store: typeof _store
) => {
  switch (instruction) {
    case "sa":
      sa(store.stackA);
      break;
    case "sb":
      sb(store.stackB);
      break;
    case "ss":
      ss(store.stackA, store.stackB);
      break;
    case "pa":
      pb(store.stackA, store.stackB);
      break;
    case "pb":
      pa(store.stackA, store.stackB);
      break;
    case "ra":
      rra(store.stackA);
      break;
    case "rb":
      rrb(store.stackB);
      break;
    case "rr":
      rrr(store.stackA, store.stackB);
      break;
    case "rra":
      ra(store.stackA);
      break;
    case "rrb":
      rb(store.stackB);
      break;
    case "rrr":
      rr(store.stackA, store.stackB);
      break;
  }
};
