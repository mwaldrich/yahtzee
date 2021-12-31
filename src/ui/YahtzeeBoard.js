import React, { Component } from 'react';
import './YahtzeeBoard.css'; // Tell webpack that Button.js uses these styles

class YahtzeeBoard extends Component {

    render() {
        // The yahtzee state is avaiable with
        //     this.props.state
        return <div class="yahtzee">
            <h1 class="yahtzee__heading">Yahtzee</h1>
            <div class="yahtzee__score-card">
                <table>
                    <tbody class="upper">
                        <tr class="head">
                            <th>Upper Section</th>
                            <th>How to Score</th>
                            <th>Game #1</th>
                            <th>Game #2</th>
                            <th>Game #3</th>
                            <th>Game #4</th>
                            <th>Game #5</th>
                            <th>Game #6</th>
                        </tr>
                        <tr>
                            <th>
                                <div class="desc">
                                    <div class="primary">Aces </div>
                                    <div class="die">&#x2680;</div>
                                </div>
                            </th>
                            <th class="how-to-score">Count and Add<br />Only Aces</th>
                            <td><input class='t' tabindex='1' /></td>
                            <td><input class='t' tabindex='2' /></td>
                            <td><input class='t' tabindex='3' /></td>
                            <td><input class='t' tabindex='4' /></td>
                            <td><input class='t' tabindex='5' /></td>
                            <td><input class='t' tabindex='6' /></td>
                        </tr>
                        <tr>
                            <th>
                                <div class="desc">
                                    <div class="primary">Twos </div>
                                    <div class="die">&#x2681;</div>
                                </div>
                            </th>
                            <th class="how-to-score">Count and Add<br />Only Twoes</th>
                            <td><input class='t' tabindex='1' /></td>
                            <td><input class='t' tabindex='2' /></td>
                            <td><input class='t' tabindex='3' /></td>
                            <td><input class='t' tabindex='4' /></td>
                            <td><input class='t' tabindex='5' /></td>
                            <td><input class='t' tabindex='6' /> </td>
                        </tr>
                        <tr>
                            <th>
                                <div class="desc">
                                    <div class="primary">Threes </div>
                                    <div class="die">&#x2682;</div>
                                </div>
                            </th>
                            <th class="how-to-score">Count and Add<br />Only Threes</th>
                            <td><input class='t' tabindex='1' /></td>
                            <td><input class='t' tabindex='2' /></td>
                            <td><input class='t' tabindex='3' /></td>
                            <td><input class='t' tabindex='4' /></td>
                            <td><input class='t' tabindex='5' /></td>
                            <td><input class='t' tabindex='6' /> </td>
                        </tr>
                        <tr>
                            <th>
                                <div class="desc">
                                    <div class="primary">Fours </div>
                                    <div class="die">&#x2683;</div>
                                </div>
                            </th>
                            <th class="how-to-score">Count and Add<br />Only Fours</th>
                            <td><input class='t' tabindex='1' /></td>
                            <td><input class='t' tabindex='2' /></td>
                            <td><input class='t' tabindex='3' /></td>
                            <td><input class='t' tabindex='4' /></td>
                            <td><input class='t' tabindex='5' /></td>
                            <td><input class='t' tabindex='6' /> </td>
                        </tr>
                        <tr>
                            <th>
                                <div class="desc">
                                    <div class="primary">Fives </div>
                                    <div class="die">&#x2684;</div>
                                </div>
                            </th>
                            <th class="how-to-score">Count and Add<br />Only Fives</th>
                            <td><input class='t' tabindex='1' /></td>
                            <td><input class='t' tabindex='2' /></td>
                            <td><input class='t' tabindex='3' /></td>
                            <td><input class='t' tabindex='4' /></td>
                            <td><input class='t' tabindex='5' /></td>
                            <td><input class='t' tabindex='6' /> </td>
                        </tr>
                        <tr>
                            <th>
                                <div class="desc">
                                    <div class="primary">Sixes </div>
                                    <div class="die">&#x2685;</div>
                                </div>
                            </th>
                            <th class="how-to-score">Count and Add<br />Only Sixes</th>
                            <td><input class='t' tabindex='1' /></td>
                            <td><input class='t' tabindex='2' /></td>
                            <td><input class='t' tabindex='3' /></td>
                            <td><input class='t' tabindex='4' /></td>
                            <td><input class='t' tabindex='5' /></td>
                            <td><input class='t' tabindex='6' />  </td>
                        </tr>
                        <tr class="foot">
                            <th>
                                <div class="desc">
                                    <div class="primary">Total Score</div>
                                </div>
                            </th>
                            <th class="how-to-score"></th>
                            <td><input class='t' tabindex='1' /></td>
                            <td><input class='t' tabindex='2' /></td>
                            <td><input class='t' tabindex='3' /></td>
                            <td><input class='t' tabindex='4' /></td>
                            <td><input class='t' tabindex='5' /></td>
                            <td><input class='t' tabindex='6' /></td>
                        </tr>
                        <tr class="foot">
                            <th>
                                <div class="desc">
                                    <div class="primary">Bonus</div>
                                    <div class="alt">If total score is 63 or over.</div>
                                </div>
                            </th>
                            <th class="how-to-score">Score 35</th>
                            <td><input class='t' tabindex='1' /></td>
                            <td><input class='t' tabindex='2' /></td>
                            <td><input class='t' tabindex='3' /></td>
                            <td><input class='t' tabindex='4' /></td>
                            <td><input class='t' tabindex='5' /></td>
                            <td><input class='t' tabindex='6' /></td>
                        </tr>
                        <tr class="foot">
                            <th>
                                <div class="desc">
                                    <div class="primary">Total</div>
                                    <div class="alt">Of Upper Section</div>
                                </div>
                            </th>
                            <th class="how-to-score"></th>
                            <td><input class='t' tabindex='1' /></td>
                            <td><input class='t' tabindex='2' /></td>
                            <td><input class='t' tabindex='3' /></td>
                            <td><input class='t' tabindex='4' /></td>
                            <td><input class='t' tabindex='5' /></td>
                            <td><input class='t' tabindex='6' /></td>
                        </tr>
                    </tbody>
                    <tbody class="lower">
                        <tr class="head">
                            <th colspan="8">Lower Section</th>
                        </tr>
                        <tr>
                            <th>
                                <div class="desc">
                                    <div class="primary">3 of a kind</div>
                                </div>
                            </th>
                            <th class="how-to-score">Total of all dice </th>
                            <td><input class='t' tabindex='1' /></td>
                            <td><input class='t' tabindex='2' /></td>
                            <td><input class='t' tabindex='3' /></td>
                            <td><input class='t' tabindex='4' /></td>
                            <td><input class='t' tabindex='5' /></td>
                            <td><input class='t' tabindex='6' /> </td>
                        </tr>
                        <tr>
                            <th>
                                <div class="desc">
                                    <div class="primary">4 of a kind </div>
                                </div>
                            </th>
                            <th class="how-to-score">Total of all dice</th>
                            <td><input class='t' tabindex='1' /></td>
                            <td><input class='t' tabindex='2' /></td>
                            <td><input class='t' tabindex='3' /></td>
                            <td><input class='t' tabindex='4' /></td>
                            <td><input class='t' tabindex='5' /></td>
                            <td><input class='t' tabindex='6' /> </td>
                        </tr>
                        <tr>
                            <th>
                                <div class="desc">
                                    <div class="primary">Full House </div>
                                </div>
                            </th>
                            <th class="how-to-score">Score 25</th>
                            <td><input class='t' tabindex='1' /></td>
                            <td><input class='t' tabindex='2' /></td>
                            <td><input class='t' tabindex='3' /></td>
                            <td><input class='t' tabindex='4' /></td>
                            <td><input class='t' tabindex='5' /></td>
                            <td><input class='t' tabindex='6' /> </td>
                        </tr>
                        <tr>
                            <th>
                                <div class="desc">
                                    <div class="primary">Sm. Straight </div>
                                    <div class="alt">Sequence of four</div>
                                </div>
                            </th>
                            <th class="how-to-score">Score 30</th>
                            <td><input class='t' tabindex='1' /></td>
                            <td><input class='t' tabindex='2' /></td>
                            <td><input class='t' tabindex='3' /></td>
                            <td><input class='t' tabindex='4' /></td>
                            <td><input class='t' tabindex='5' /></td>
                            <td><input class='t' tabindex='6' /> </td>
                        </tr>
                        <tr>
                            <th>
                                <div class="desc">
                                    <div class="primary">Lg. Straight </div>
                                    <div class="alt">Sequence of five</div>
                                </div>
                            </th>
                            <th class="how-to-score">Score 40</th>
                            <td><input class='t' tabindex='1' /></td>
                            <td><input class='t' tabindex='2' /></td>
                            <td><input class='t' tabindex='3' /></td>
                            <td><input class='t' tabindex='4' /></td>
                            <td><input class='t' tabindex='5' /></td>
                            <td><input class='t' tabindex='6' /> </td>
                        </tr>
                        <tr>
                            <th>
                                <div class="desc">
                                    <div class="primary">YAHTZEE </div>
                                    <div class="alt">Five of a kind</div>
                                </div>
                            </th>
                            <th class="how-to-score">Score 50</th>
                            <td><input class='t' tabindex='1' /></td>
                            <td><input class='t' tabindex='2' /></td>
                            <td><input class='t' tabindex='3' /></td>
                            <td><input class='t' tabindex='4' /></td>
                            <td><input class='t' tabindex='5' /></td>
                            <td><input class='t' tabindex='6' />  </td>
                        </tr>
                        <tr>
                            <th>
                                <div class="desc">
                                    <div class="primary">Chance </div>
                                </div>
                            </th>
                            <th class="how-to-score">Total of all dice</th>
                            <td><input class='t' tabindex='1' /></td>
                            <td><input class='t' tabindex='2' /></td>
                            <td><input class='t' tabindex='3' /></td>
                            <td><input class='t' tabindex='4' /></td>
                            <td><input class='t' tabindex='5' /></td>
                            <td><input class='t' tabindex='6' />    </td>
                        </tr>
                        <tr>
                            <th rowspan="2">
                                <div class="desc">
                                    <div class="primary">YAHTZEE Bonus</div>
                                </div>
                            </th>
                            <th class="how-to-score">&#x2714; for<br />each bonus</th>
                            <td><input class='t' tabindex='1' /></td>
                            <td><input class='t' tabindex='2' /></td>
                            <td><input class='t' tabindex='3' /></td>
                            <td><input class='t' tabindex='4' /></td>
                            <td><input class='t' tabindex='5' /></td>
                            <td><input class='t' tabindex='6' />  </td>
                        </tr>
                        <tr>
                            <th class="how-to-score">Score 100<br />per &#x2714;</th>
                            <td><input class='t' tabindex='1' /></td>
                            <td><input class='t' tabindex='2' /></td>
                            <td><input class='t' tabindex='3' /></td>
                            <td><input class='t' tabindex='4' /></td>
                            <td><input class='t' tabindex='5' /></td>
                            <td><input class='t' tabindex='6' />  </td>
                        </tr>
                        <tr class="foot">
                            <th>
                                <div class="desc">
                                    <div class="primary">Total</div>
                                    <div class="alt">Of Lower Section</div>
                                </div>
                            </th>
                            <th class="how-to-score"></th>
                            <td><input class='t' tabindex='1' /></td>
                            <td><input class='t' tabindex='2' /></td>
                            <td><input class='t' tabindex='3' /></td>
                            <td><input class='t' tabindex='4' /></td>
                            <td><input class='t' tabindex='5' /></td>
                            <td><input class='t' tabindex='6' /></td>
                        </tr>
                        <tr class="foot">
                            <th>
                                <div class="desc">
                                    <div class="primary">Total</div>
                                    <div class="alt">Of Upper Section          </div>
                                </div>
                            </th>
                            <th class="how-to-score"></th>
                            <td><input class='t' tabindex='1' /></td>
                            <td><input class='t' tabindex='2' /></td>
                            <td><input class='t' tabindex='3' /></td>
                            <td><input class='t' tabindex='4' /></td>
                            <td><input class='t' tabindex='5' /></td>
                            <td><input class='t' tabindex='6' /></td>
                        </tr>
                        <tr class="foot">
                            <th>
                                <div class="desc">
                                    <div class="primary">Grand Total</div>
                                </div>
                            </th>
                            <th class="how-to-score"></th>
                            <td><input class='t' tabindex='1' /></td>
                            <td><input class='t' tabindex='2' /></td>
                            <td><input class='t' tabindex='3' /></td>
                            <td><input class='t' tabindex='4' /></td>
                            <td><input class='t' tabindex='5' /></td>
                            <td><input class='t' tabindex='6' /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>;
    }
}

export default YahtzeeBoard;
