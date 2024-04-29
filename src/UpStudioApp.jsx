import { AppRouter } from "./router/AppRouter"
import { AppTheme } from "./theme/AppTheme"

export const UpStudioApp = () => {
  return (
    <AppTheme>
      <AppRouter />
    </AppTheme>
  )
}
