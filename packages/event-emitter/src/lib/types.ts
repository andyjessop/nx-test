export interface EventEmitter<T extends Record<string, unknown>> {
  emit<K extends keyof T>(type: K, data: T[K]): Promise<unknown[]>;
  off<K extends keyof T>(type: K, handler: EventHandler<T[K]>): void;
  offAll(handler: EventHandler<T[keyof T]>): void;
  on<K extends keyof T>(type: K, handler: EventHandler<T[K]>): void;
  onAll(handler: EventHandler<T[keyof T]>): void;
  once<K extends keyof T>(type: K, handler: EventHandler<T[K]>): void;
}

export type EventHandler<T> = (data: T) => unknown;

export interface EventListener<T, K extends keyof T> {
  handler: EventHandler<T[K]>;
  type: K;
}