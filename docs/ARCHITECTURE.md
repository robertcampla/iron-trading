# IRON TRADING — Architecture

## Capas

### 1. Web Application
Interfaz, cuentas, configuración, análisis, diario y supervisión del Autopilot.

### 2. Trading Intelligence
Iron Strategies + análisis de contexto y generación de candidatos LONG/SHORT.

### 3. Iron Risk Engine
Autoridad final antes de ejecutar. Evalúa límites diarios, drawdown, contratos, riesgo por trade, pérdidas consecutivas y profit protection.

### 4. Iron Bridge
Comunicación segura entre la aplicación y la capa local de ejecución.

### 5. NinjaTrader Execution
Envío/gestión de órdenes, stop y target. Las protecciones críticas deben sobrevivir a una desconexión de la web cuando técnicamente sea posible.

## Flujo
Market Data → Strategy → Risk Engine → Bridge → NinjaTrader → Execution Result → Web/Journal

## Primera integración
- Instrumento inicial: MNQ.
- Entorno inicial: Replay/SIM.
- LONG y SHORT.
- Stop y Target obligatorios.
- Registro explícito de decisiones y bloqueos.

NQ y cuentas reales se incorporan únicamente después de validar el núcleo.
