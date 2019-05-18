import CA from './ca'

export default function sketch(p) {
  let ca
  let setCARuleToRedux

  p.setSketchProps = props => {
    if (props.setCARuleToRedux) setCARuleToRedux = props.setCARuleToRedux
  }

  p.refreshSketch = () => {
    p.background(255)
    ca.resetProps(p)
    setCARuleToRedux(ca.rule)
  }

  p.setup = function() {
    p.createCanvas(p.windowWidth, p.windowHeight)
    p.frameRate(15)
    p.background(255)

    ca = new CA(p)
    p.ca = ca
  }

  p.draw = function() {
    ca.display(p)
    if (ca.generation < Math.floor(p.height / ca.w)) {
      ca.generate()
    } else {
      p.refreshSketch()
    }
  }

  p.windowResized = function() {
    p.resizeCanvas(p.windowWidth, p.windowHeight)
  }
}
