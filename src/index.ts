/**
 * MA014 — MYTHOS ESTIMATOR
 * Public package entry point.
 */

export const AGENT_CODE = "MA014" as const;
export const AGENT_ID = "mythos-estimator" as const;
export const AGENT_NAME = "MYTHOS ESTIMATOR" as const;

export type AgentReadiness = "scaffold" | "development" | "validated" | "production";
export const AGENT_READINESS: AgentReadiness = "scaffold";
