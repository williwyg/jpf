import { StackPanel, StackPanelOptions } from "../panel/stackPanel";
import { ToggleButton, ToggleButtonOptions } from "../button/toggleButton";

export class AudioRecorder extends StackPanel<ToggleButton> {
    constructor(options?: AudioRecorderOptions) {
        super(options);

        if (options) {
            if (options.startStopButtonOptions) {
                this.startStopButton = new ToggleButton(options.startStopButtonOptions);
            }
            if (options.pauseResumeButtonOptions) {
                this.pauseResumeButton = new ToggleButton(options.pauseResumeButtonOptions);
            }
            this.autoStopAfter = options.autoStopAfter;
            this.onstop = options.onstop;
            this.onerror = options.onerror;
        }


        const superBuild = this.build;
        this.build = () => {
           
            if (!this.startStopButton) {
                this.startStopButton = new ToggleButton({});
            }
            if (!this.pauseResumeButton) {
                this.pauseResumeButton = new ToggleButton({});
            }

            this.startStopButton.selectedchanged = (selected: boolean) => {
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
                                    if (this.onstop) {
                                        this.onstop({
                                            blob: audioBlob,
                                            mimeType: this.mediaRecorder.mimeType
                                        });
                                    }
                                });

                                if (this.autoStopAfter) {
                                    setTimeout(
                                        () => {
                                            this.mediaRecorder.stop();
                                        },
                                        this.autoStopAfter
                                    );
                                }

                            }
                        );
                } else {
                    this.mediaRecorder.stop();
                }
            };

            this.pauseResumeButton.selectedchanged = (selected: boolean) => {
                if (selected) {
                    this.mediaRecorder.pause();
                } else {
                    this.mediaRecorder.resume();
                }
            };


            this.setItems([this.startStopButton, this.pauseResumeButton]);

            superBuild();
        }
    }

    private mediaRecorder: MediaRecorder;

    readonly mimeType: string;
    readonly state: MediaRecorderState;
    readonly stream: MediaStream;

    startStopButton: ToggleButton;
    pauseResumeButton: ToggleButton;
    autoStopAfter: number;
    onstop: (recordingResult: RecordingResult) => void;
    onerror: (event: MediaRecorderErrorEvent) => void;
}

export interface AudioRecorderOptions extends StackPanelOptions<ToggleButton> {
    startStopButtonOptions?: ToggleButtonOptions;
    pauseResumeButtonOptions?: ToggleButtonOptions;
    autoStopAfter?: number;
    onstop?: (recordingResult: RecordingResult) => void;
    onerror?: (event: MediaRecorderErrorEvent) => void;
}

export interface RecordingResult {
    blob: Blob;
    mimeType: string;
}