import * as React from 'react';

interface Props {
  type?: string;
  name: string;
  value: string;
  placeholder?: string;
  onChange: any;
  onKeyDown?: any;
}

export class Input extends React.Component<Props, {}> {
  public state = {
    value: ''
  }

  constructor(props: Props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  render() {
    return (
      <div className="">
        <label
          htmlFor={"input-" + this.props.name}>
          {this.props.name}
        </label>
        <input id={"input-" + this.props.name}
          name={this.props.name}
          type={this.props.type || "text"}
          className="form-control"
          value={this.props.value}
          ref={this.props.name}
          placeholder={this.props.placeholder || "Write here"}
          onChange={this.props.onChange} 
          onKeyDown={this.props.onKeyDown}/>
      </div>
    )
  }
}
