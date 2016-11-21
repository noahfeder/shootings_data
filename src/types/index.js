export const REQUEST_RECORDS = "REQUEST_RECORDS";
export const RECEIVE_RECORDS = "RECEIVE_RECORDS";
export const UPDATE_QUERY = "UPDATE_QUERY";
export const PAGE_UP = "PAGE_UP";
export const PAGE_DOWN = "PAGE_DOWN";
export const PAGE_SIZE = "PAGE_SIZE";
export const SET_ACTIVE = "SET_ACTIVE";
export const REQUEST_VIDEOS = "REQUEST_VIDEOS";
export const RECEIVE_VIDEOS = "RECEIVE_VIDEOS";
export const REQUEST_REPS = "REQUEST_REPS";
export const RECEIVE_REPS = "RECEIVE_REPS";
export const RESET_PAGE = "RESET_PAGE";

const ROOT = "http://police.millenialsears.com/"
export const PEOPLE = ROOT + "people/";
export const VIDEOS = ROOT + "videos/";
export const REPS = ROOT + "representatives/";

export const VALID_QUERIES = [
  "age",
  "gender",
  "race",
  "date",
  "city",
  "state",
  "zip",
  "county",
  "agency",
  "cause",
  "description",
  "disposition",
  "charges",
  "mental_illness",
  "armed"
];
