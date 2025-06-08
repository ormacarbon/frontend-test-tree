import { Overlay, Spinner } from "./styles";

export function LoadingOverlay() {
  return (
    <Overlay>
      <Spinner />
    </Overlay>
  );
}
