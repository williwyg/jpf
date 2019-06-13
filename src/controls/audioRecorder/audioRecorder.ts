import { StackPanel, StackPanelOptions } from "../panel/stackPanel";
import { ToggleButton, ToggleButtonOptions } from "../button/toggleButton";

export interface AudioRecorderOptions extends StackPanelOptions<ToggleButton> {
    startStopButtonOptions?: ToggleButtonOptions;
    pauseResumeButtonOptions?: ToggleButtonOptions;
    autoStopAfter?: number;
    onstop?: (recordingResult: RecordingResult) => void;
    onerror?: (event: MediaRecorderErrorEvent) => void;
}

export class AudioRecorder extends StackPanel<ToggleButton> {
    constructor(options?: AudioRecorderOptions) {
        super(options);

        if (this.options.startStopButtonOptions) {
            this.startStopButton = new ToggleButton(this.options.startStopButtonOptions);
        }
        if (this.options.pauseResumeButtonOptions) {
            this.pauseResumeButton = new ToggleButton(this.options.pauseResumeButtonOptions);
        }
    }

    build() {
        if (!this.startStopButton) {
            this.startStopButton = new ToggleButton({});
        }
        if (!this.pauseResumeButton) {
            this.pauseResumeButton = new ToggleButton({});
        }

        this.startStopButton.options.selectedchanged = (selected: boolean) => {
            if (selected) {
                navigator.mediaDevices
                    .getUserMedia(
                        {
                            audio: true
                        }
                    )
                    .then(
                        (mediaStream: MediaStream) => {
                            this.mediaRecorder = new MediaRecorder(mediaStream);
                            this.mediaRecorder.start();

                            const audioChunks = [];

                            this.mediaRecorder.addEventListener("dataavailable", (event: MediaRecorderDataAvailableEvent) => {
                                audioChunks.push(event.data);
                            });

                            this.mediaRecorder.addEventListener("stop", () => {
                                const audioBlob = new Blob(audioChunks);
                                if (this.options.onstop) {
                                    this.options.onstop({
                                        blob: audioBlob,
                                        mimeType: this.mediaRecorder.mimeType
                                    });
                                }
                            });

                            if (this.options.autoStopAfter) {
                                setTimeout(
                                    () => {
                                        this.mediaRecorder.stop();
                                    },
                                    this.options.autoStopAfter
                                );
                            }

                        }
                    );
            } else {
                this.mediaRecorder.stop();
            }
        };

        this.pauseResumeButton.options.selectedchanged = (selected: boolean) => {
            if (selected) {
                this.mediaRecorder.pause();
            } else {
                this.mediaRecorder.resume();
            }
        };


        this.setChildren([this.startStopButton, this.pauseResumeButton]);

        super.build();
    }

    private mediaRecorder: MediaRecorder;

    readonly mimeType: string;
    readonly state: MediaRecorderState;
    readonly stream: MediaStream;

    startStopButton: ToggleButton;
    pauseResumeButton: ToggleButton;
    readonly options: AudioRecorderOptions;
}

export interface RecordingResult {
    blob: Blob;
    mimeType: string;
}