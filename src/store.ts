import { reactive } from "vue";

export const store = reactive({
  executablePath: null,
  numbersCount: 10,
  numbersList: [] as number[],
  instructions: [],
  stackA: [] as number[],
  stackB: [] as number[],
  isRunning: false,
  speed: 500,
  timeoutId: null as NodeJS.Timeout | null,
  i: 0,
});
