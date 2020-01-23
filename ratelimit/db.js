const state = new Map();

export function inspect(key) {
  return state.get(key);
}
export async function getRateLimitState(key) {
  return state.get(key);
}
export async function replaceRateLimitState(key, newState, oldState) {
  if (state.get(key) !== oldState) {
    throw new Error("Attempted to take multiple tokens simultaneously");
  }
  state.set(key, newState);
}
