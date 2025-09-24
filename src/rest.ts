import ky, { type Options } from "ky";
export default function rest(config: Options = {}) {
  return ky.create(config);
}
